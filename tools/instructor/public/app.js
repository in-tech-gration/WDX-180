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
const COMPLETED_COL = 6;

// FUNCTIONS:

/**
 * Source: https://people.apache.org/~angeloh/
 */
function renderSpreadsheetDataOnTable(data, tableSelector, headers, selectedDay) {

  console.log("renderSpreadsheetDataOnTable()",{ data, headers, selectedDay });

  const table             = document.querySelector(tableSelector);
  const { parentElement } = table;
  table.innerHTML         = "";
  const errorEl = parentElement.querySelector(".error")
  errorEl.classList.add("hidden");

  if ( data.length === 0 || !headers ){
    errorEl.classList.remove("hidden");
    errorEl.textContent = `ERROR: Could not load progress file.`
  } 

  const studentId = parentElement.getAttribute("data-student");

  // Fill-in Headers:
  if ( headers ){
    let row = table.insertRow(-1);
    for (let colIndex = 0; colIndex < headers.length; colIndex++) {
      let letter = headers[colIndex];
      row.insertCell(-1).innerHTML = letter;
    }
  }

  data.forEach(( weeklyData, idx ) =>{

    try {

      let row = table.insertRow(-1);
      const newCell = row.insertCell(-1);

      const is404 = weeklyData === "404";

      if ( is404 || weeklyData.length === 0 ){

        const prepend = selectedDay === "all" ? "Weekly" : "";
        const weekday = selectedDay === "all" ? `(day ${idx})` : "";

        newCell.innerHTML = prepend + ( is404 ? `Entry ${weekday} resulted in 404` : `Entry ${weekday} is empty. Check for malformed CSV.` );
        newCell.setAttribute("colspan", headers.length);
        newCell.setAttribute("class", "error-dark");
        return; 

      }
  
      const week = weeklyData[0][0].toString().padStart(2, "0");
      const day = weeklyData[0][1].toString().padStart(2, "0");
  
      const fileName = `progress.w${week}.d${day}.csv`
      const URL = `https://raw.githubusercontent.com/${studentId}/WDX-180/main/user/week${week}/progress/progress.w${week}.d${day}.csv`
      const URL_Pages = `https://github.com/${studentId}/WDX-180/blob/main/user/week${week}/progress/progress.w${week}.d${day}.csv`
  
      newCell.innerHTML = `
        <a href="${URL}" target="_blank">
          ${fileName}
        </a>
        /
        <a href="${URL_Pages}" target="_blank">
          ${fileName} (open in Pages)
        </a>
      `;
      newCell.setAttribute("colspan", headers.length);
      newCell.setAttribute("class", "cell-with-link");
  
      // Fill-in CSV:
      for (let rowIndex = 0; rowIndex < weeklyData.length; rowIndex++) {
    
        let row = table.insertRow(-1);
    
        for (let colIndex = 0; colIndex < headers.length; colIndex++) {
    
          if ( colIndex === 0 || colIndex === 1 ){
    
            const newCell = row.insertCell(-1);
            newCell.innerHTML = weeklyData[rowIndex][colIndex];
            newCell.setAttribute("class", "text-center");
    
          } else {
    
            const newCell = row.insertCell(-1);
            const cellData = weeklyData[rowIndex][colIndex];
            newCell.innerHTML = cellData;
    
            if ( colIndex > 3 && colIndex < 7  ){
              newCell.classList.add("text-center");
            }
            
            if ( colIndex === COMPLETED_COL ){
    
              newCell.classList.add("completed-col");
    
              if ( cellData === "TRUE" ){
                newCell.classList.add("completed");
              }
          
            }
    
            // const cellId = `${studentId}-${rowIndex}-${colIndex}`;
            // row.insertCell(-1).innerHTML = `<input id="${cellId}" value="${weeklyData[rowIndex][colIndex]}" />`;
    
          }
    
        }
    
      }
      
    } catch (error) {
      console.log(`Error parsing weekly data.`, error, weeklyData );      
    }

  });

  // MAKE SPREADSHEET EDITABLE: (TEMPORARILY DISABLED. REQUIRES DEBUGGING.)
  return;

  function computeAll () {
    INPUTS.forEach(function (elm) { 
      try { 
        elm.value = DATA[elm.id]; 
      } catch (e) { 

      } 
    });
  };

  let DATA   = {}
  let INPUTS = [].slice.call(document.querySelectorAll( `${tableSelector} input` ));

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

  // Alternative: fetch via GitHub API:
  // https://api.github.com/repos/{ USERNAME }/WDX-180/contents/user/week01/progress/progress.w01.d01.csv

  return fetch( URL )
  .then( response => response.text() )
  .catch( error =>{
    console.error(`ERROR fetching ${URL}`, error);
  })
}

function aggregateCSVData({ weeklyCSVs, withHeaders = true }){

  let csvData = [];
  let headers = [];
  const options = { skipInitialRows: 1 }

  weeklyCSVs.forEach(({ status, value }, index) =>{

    if ( status !== "fulfilled" ){

      return false;

    }

    if ( value === "404: Not Found" ){

      console.log( "404" );
      csvData.push( "404" );

    } else {

      const isNotString = ( typeof value !== "string" );
      const isEmpty     = isNotString || value.trim().length === 0;

      if ( headers.length === 0 && !isEmpty ){

        const csvRowData = CSV.parse(value, { ...options, skipInitialRows: 0 });
        headers = csvRowData[0];
        csvData.push(csvRowData.slice(1));
        
      } else {

        const csvRowData = CSV.parse(value, options);
        csvData.push(csvRowData)

      }
    }
  })

  return [ csvData, headers ];

}

async function handleWeekSelection( studentId ){

  const selectedStudent = {
    ... defaultStudentSelection,
    ...currentlySelectedStudents[studentId]
  }

  const { week, day } = selectedStudent
  
  if ( !week ){
    return false;
  }

  const weeklyURLs = getWeeklyGitHubProgressURLs( studentId, week, day );
  const promises   = weeklyURLs.map( URL => fetchCSV(URL) )

  try {

    const weeklyCSVs = await Promise.allSettled( promises );
    const [ csvData, headers ] = aggregateCSVData({ weeklyCSVs });
    renderSpreadsheetDataOnTable( 
      csvData, 
      `.student-progress-sheets[data-student="${studentId}"] table`, 
      headers,
      day
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

      const studentTableSection = studentList.querySelector(`section.student-progress-sheets[data-student="${studentId}"]`);
      studentTableSection.classList.toggle('hidden');
  
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