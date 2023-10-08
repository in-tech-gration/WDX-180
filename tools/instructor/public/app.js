// VARIABLES:
const defaultStudentSelection = {
  trimester: "beginner",
  day: "01"
}

const getWeeklyGitHubProgressURLs = ( 
  studentId, 
  week, 
  day = defaultStudentSelection.day 
)=>{

  const URLs = [];
  const paddedWeek = week;

  if ( day === "all" ){

    for ( let i = week; i <= 5; i++ ){
      URLs.push(`https://raw.githubusercontent.com/${studentId}/WDX-180/main/user/week${paddedWeek}/progress/progress.w${paddedWeek}.d${String(i).padStart(2, "0")}.csv`);
    }

  } else {

    URLs.push(`https://raw.githubusercontent.com/${studentId}/WDX-180/main/user/week${paddedWeek}/progress/progress.w${paddedWeek}.d${String(day).padStart(2, "0")}.csv`);

  }

  return URLs;

}
const currentlySelectedStudents = {}
const studentList = document.querySelector("ul.student-list");

// FUNCTIONS:

/**
 * Source: https://people.apache.org/~angeloh/
 */
function renderSpreadsheetDataOnTable(data, tableSelector, headers) {

  console.log("renderSpreadsheetDataOnTable()",{ data, headers });

  const table = document.querySelector(tableSelector);
  table.innerHTML = "";

  // Fill-in CSV:
  for (let rowIndex = 0; rowIndex <= data.length; rowIndex++) {
    let row = table.insertRow(-1);
    for (let j = 0; j < headers.length; j++) {
      let letter = headers[j];
      row.insertCell(-1).innerHTML = rowIndex && j ? "<input id='" + letter + rowIndex + "'/>" : rowIndex || letter;
    }
  }

  function computeAll () {
    INPUTS.forEach(function (elm) { 
      try { 
        elm.value = DATA[elm.id]; 
      } catch (e) { 

      } 
    });
  };

  let DATA = {}, INPUTS = [].slice.call(document.querySelectorAll("input"));
  INPUTS.forEach(function (elm) {
    elm.onfocus = function (e) {
      e.target.value = localStorage[e.target.id] || "";
    };
    elm.onblur = function (e) {
      localStorage[e.target.id] = e.target.value;
      computeAll();
    };
    let getter = function () {
      let value = localStorage[elm.id] || "";
      if (value.charAt(0) == "=") {
        with (DATA) return eval(value.substring(1));
      } else { return isNaN(parseFloat(value)) ? value : parseFloat(value); }
    };
    Object.defineProperty(DATA, elm.id, { get: getter });
    Object.defineProperty(DATA, elm.id.toLowerCase(), { get: getter });
  });

}

async function fetchCSV( URL ){
  return fetch( URL )
  .then( response => response.text() )
  .catch( error =>{
    console.error(`ERROR fetching ${URL}`, error);
  })
}

function aggregateCSVData({ weeklyCSVs, withHeaders = true }){

  let csvData = [];
  let headers;

  weeklyCSVs.forEach(({ status, value }, index) =>{
    if ( status !== "fulfilled" ){
      return false;
    }
    if ( value === "404: Not Found" ){
      console.log("404");
    } else {
      // console.log(value);
      const options = { skipInitialRows: 1 }
      if ( index === 0 ){
        options.skipInitialRows = 0;
        const csvRowData = CSV.parse(value, options);
        headers = csvRowData[0];
        csvData = csvData.concat(csvRowData.slice(1));
      } else {
        const csvRowData = CSV.parse(value, options);
        csvData = csvData.concat(csvRowData)
      }
    }
  })

  return [ csvData, headers ];

}

async function handleWeekSelection( studentId ){

  const selectedStudent = Object.assign(
    defaultStudentSelection,
    currentlySelectedStudents[studentId]
  );

  const { week, day } = selectedStudent

  if ( !week ){
    return false;
  }

  const weeklyURLs = getWeeklyGitHubProgressURLs( studentId, week, day );

  const promises = weeklyURLs.map( URL =>{
    return fetchCSV(URL);
  })

  try {

    const weeklyCSVs = await Promise.allSettled( promises );

    const [ csvData, headers ] = aggregateCSVData({ weeklyCSVs });

    const studentTableSection = studentList.querySelector(`section.student-progress-sheets[data-student="${studentId}"]`);

    studentTableSection.classList.toggle('hidden');

    renderSpreadsheetDataOnTable( 
      csvData, 
      ".student-progress-sheets table", 
      headers 
    );

  } catch (e) {
    console.log(e);
  }
}

// ACTION!

function init(e) {

  console.log("Instructor Cockpit v0.1 (beta)");

  studentList.addEventListener("click", e => {

    const { target } = e;

    if (target.classList.contains("student-progress-btn")) {
      e.preventDefault();
      const studentId = target.href.split("#")[1];
      const studentSection = studentList.querySelector(`section.student-data[data-student="${studentId}"]`);
      studentSection.classList.toggle("hidden");
    }

  });

  studentList.addEventListener("change", e => {

    const { target } = e;

    // Trimester Selection:
    if (target.getAttribute("name") === "trimester-selection") {
      const studentId = target.parentElement.getAttribute("data-student");
      if ( currentlySelectedStudents[studentId] ){
        currentlySelectedStudents[studentId].trimester = target.value;
      } else {
        currentlySelectedStudents[studentId] = {
          trimester: target.value
        }
      }
      handleWeekSelection( studentId )
    }

    // Week Selection:
    if (target.getAttribute("name") === "week-selection") {

      const studentId = target.parentElement.getAttribute("data-student");
      if ( currentlySelectedStudents[studentId] ){
        currentlySelectedStudents[studentId].week = target.value;
      } else {
        currentlySelectedStudents[studentId] = {
          week: target.value
        }
      }

      // Do not update sheet if no week has been selected:
      if (target.selectedIndex === 0 ){
        return;
      }

      handleWeekSelection( studentId )
    }

    // Day Selection:
    if (target.getAttribute("name") === "day-selection") {
      const studentId = target.parentElement.getAttribute("data-student");
      if ( currentlySelectedStudents[studentId] ){
        currentlySelectedStudents[studentId].day = target.value;
      } else {
        currentlySelectedStudents[studentId] = {
          day: target.value
        }
      }
      handleWeekSelection( studentId )
    }

  });

}



document.addEventListener("DOMContentLoaded", init);