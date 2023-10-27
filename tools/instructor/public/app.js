// VARIABLES:
const defaultStudentSelection = {
  trimester: "beginner",
  day: "01"
}
const getWeeklyGitHubProgressURLs = (
  studentId,
  week,
  day = defaultStudentSelection.day
) => {

  const URLs = [];
  const paddedWeek = week;

  if (day === "all") {

    for (let dayNum = 1; dayNum <= 5; dayNum++) {
      URLs.push(`https://raw.githubusercontent.com/${studentId}/WDX-180/main/user/week${paddedWeek}/progress/progress.w${paddedWeek}.d${String(dayNum).padStart(2, "0")}.csv`);
    }

  } else {

    URLs.push(`https://raw.githubusercontent.com/${studentId}/WDX-180/main/user/week${paddedWeek}/progress/progress.w${paddedWeek}.d${String(day).padStart(2, "0")}.csv`);

  }

  return URLs;

}
const currentlySelectedStudents = {}
const studentList = document.querySelector("ul.student-list");
const COMPLETED_COL    = 6;
const INSTRUCTIONS_COL = 7;
const googleTranscriptParserHTML = `

  <div id="google-transcript-parser" class="lm_content--inner">
    <h4>Google Meet Transcript (.docx) Parser</h4>
    <div id="drop-area">Drop .docx here</div>
    <input id="docx" type="file" />
    <textarea id="google-meet-names" rows="12"></textarea>
  </div>

`
const goldenLayoutConfig = {
  content: [{
    type: 'row',
    content: [

      {
        type: 'stack', // Stack
        width: 80,
        content: [
          {
            type: 'component',
            componentName: 'Cockpit',
            title: "Dashboard",
            componentState: { label: 'A' }
          }
        ],
      },
      {
        type: 'column',
        content: [
          {
            type: 'stack', // Stack
            content: [
              {
                type: 'component',
                title: 'Google Transcript Parser',
                componentName: 'Cockpit',
                componentState: {
                  text: 'Component 1',
                  isTranscriptComponent: true
                }
              },
              {
                type: 'component',
                title: 'Statistics',
                componentName: 'Cockpit',
                componentState: { text: 'Component 2' }
              },
            ],
            height: 65,
          },
          {
            height: 35,
            type: 'component',
            title: "Preview",
            componentName: 'Cockpit',
            componentState: { label: 'C' }
          }
        ]
      }
    ]
  }]
};

// TODO: Grab Workflow Runs and check for submitted exercises, failed tests, etc.
// FAILED: https://github.com/alkozp/WDX-180/actions/runs/6481541762
// PASSED: https://github.com/alkozp/WDX-180/actions/runs/6481855477
// https://api.github.com/repos/in-tech-gration/WDX-180/actions/runs
// Date: https://api.github.com/repos/in-tech-gration/WDX-180/actions/runs?created=YYYY-MM-DD..YYYY-MM-DD

// GITHUB API:
const GITHUB_API_BASE = `https://api.github.com`;

const getGitHubRepoInfoFromUsername = username => `${GITHUB_API_BASE}/repos/${username}/WDX-180`;

const getGitHubRepoSyncInfoFromUsername = username => `${GITHUB_API_BASE}/repos/in-tech-gration/WDX-180/compare/in-tech-gration:main...${username}:main`

// FUNCTIONS:

/**
 * Source: https://people.apache.org/~angeloh/
 */
function renderSpreadsheetDataOnTable(data, tableSelector, headers, selectedDay) {

  // console.log("renderSpreadsheetDataOnTable()",{ data, headers, selectedDay });

  const table = document.querySelector(tableSelector);
  const { parentElement } = table;
  table.innerHTML = "";
  const errorEl = parentElement.querySelector(".error")
  errorEl.classList.add("hidden");

  if (data.length === 0 || !headers) {
    errorEl.classList.remove("hidden");
    errorEl.textContent = `ERROR: Could not load progress file.`
  }

  const studentId = parentElement.getAttribute("data-student");

  // Fill-in Headers:
  if (headers) {
    let row = table.insertRow(-1);
    for (let colIndex = 0; colIndex < headers.length; colIndex++) {
      let letter = headers[colIndex];
      row.insertCell(-1).innerHTML = letter;
    }
  }

  data.forEach((weeklyData, idx) => {

    try {

      let row = table.insertRow(-1);
      const newCell = row.insertCell(-1);

      const is404 = weeklyData === "404";

      if (is404 || weeklyData.length === 0) {

        const prepend = selectedDay === "all" ? "Weekly" : "";
        const weekday = selectedDay === "all" ? `(day ${idx + 1})` : "";

        newCell.innerHTML = prepend + (is404 ? `Entry ${weekday} resulted in 404` : `Entry ${weekday} is empty. Check for malformed CSV.`);
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

          if (colIndex === 0 || colIndex === 1) {

            const newCell = row.insertCell(-1);
            newCell.innerHTML = weeklyData[rowIndex][colIndex];
            newCell.setAttribute("class", "text-center");

          } else {

            const newCell = row.insertCell(-1);
            const cellData = weeklyData[rowIndex][colIndex];

            newCell.innerHTML = cellData;

            if (!cellData) {
              newCell.innerHTML = `<span class="error">(malformed cell data)</span>`;
            }

            if (cellData && colIndex === INSTRUCTIONS_COL) {

              const isLink = cellData.trim().indexOf("https://") === 0;
              if (isLink) {
                newCell.innerHTML = `<a href="${cellData}" target="_blank">${cellData}</a>`;
              }
            }

            if (colIndex > 3 && colIndex < 7) {
              newCell.classList.add("text-center");
            }

            if (colIndex === COMPLETED_COL) {

              newCell.classList.add("completed-col");

              if (cellData === "TRUE") {
                newCell.classList.add("completed");
              }

            }

            // const cellId = `${studentId}-${rowIndex}-${colIndex}`;
            // row.insertCell(-1).innerHTML = `<input id="${cellId}" value="${weeklyData[rowIndex][colIndex]}" />`;

          }

        }

      }

    } catch (error) {
      console.log(`Error parsing weekly data.`, error, weeklyData);
    }

  });

  // MAKE SPREADSHEET EDITABLE: (TEMPORARILY DISABLED. REQUIRES DEBUGGING.)
  return;

  function computeAll() {
    INPUTS.forEach(function (elm) {
      try {
        elm.value = DATA[elm.id];
      } catch (e) {

      }
    });
  };

  let DATA = {}
  let INPUTS = [].slice.call(document.querySelectorAll(`${tableSelector} input`));

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

async function fetchCSV(URL) {

  // Alternative: fetch via GitHub API:
  // https://api.github.com/repos/{ USERNAME }/WDX-180/contents/user/week01/progress/progress.w01.d01.csv

  return fetch(URL)
    .then(response => response.text())
    .catch(error => {
      console.error(`ERROR fetching ${URL}`, error);
    })
}

function aggregateCSVData({ weeklyCSVs, withHeaders = true }) {

  let csvData = [];
  let headers = [];
  const options = { skipInitialRows: 1 }

  weeklyCSVs.forEach(({ status, value }, index) => {

    if (status !== "fulfilled") {

      return false;

    }

    if (value === "404: Not Found") {

      console.log("404");
      csvData.push("404");

    } else {

      const isNotString = (typeof value !== "string");
      const isEmpty = isNotString || value.trim().length === 0;

      if (headers.length === 0 && !isEmpty) {

        const csvRowData = CSV.parse(value, { ...options, skipInitialRows: 0 });
        headers = csvRowData[0];
        csvData.push(csvRowData.slice(1));

      } else {

        const csvRowData = CSV.parse(value, options);
        csvData.push(csvRowData)

      }
    }
  })

  return [csvData, headers];

}

async function handleWeekSelection(studentId) {

  const selectedStudent = {
    ...defaultStudentSelection,
    ...currentlySelectedStudents[studentId]
  }

  const { week, day } = selectedStudent

  if (!week) {
    return false;
  }

  const weeklyURLs = getWeeklyGitHubProgressURLs(studentId, week, day);
  const promises = weeklyURLs.map(URL => fetchCSV(URL))

  try {

    const weeklyCSVs = await Promise.allSettled(promises);
    const [csvData, headers] = aggregateCSVData({ weeklyCSVs });
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

function handleProgressDisplay(target) {
  const studentId = target.href.split("#")[1];
  const studentSection = studentList.querySelector(`section.student-data[data-student="${studentId}"]`);
  studentSection.classList.toggle("hidden");

  const studentTableSection = studentList.querySelector(`section.student-progress-sheets[data-student="${studentId}"]`);
  studentTableSection.classList.toggle('hidden');

}

function handleRepoSyncInfo(target) {
  const studentId = target.href.split("#")[1];
  console.log({ studentId });
  const btn = studentList.querySelector(`a.sync[href='#${studentId}']`);
  const btnIcon = btn.querySelector("i")
  btnIcon.classList.add("rotating");

  fetch(getGitHubRepoSyncInfoFromUsername(studentId))
    .then(res => res.json())
    .then(data => {
      // data.ahead_by / data.behind_by / data.total_commits
      const behindByEl = btn.querySelector(".github_behind_by");
      if (data.behind_by > 0) {
        behindByEl.textContent = "Behind by: " + data.behind_by;
        behindByEl.classList.add("active");
      } else {
        behindByEl.textContent = "In-sync";
        behindByEl.classList.add("active");
        behindByEl.classList.add("github_in_sync");
      }
      const commitEl = btn.querySelector(".github_commits")
      commitEl.textContent = "Commits: " + data.total_commits;
      commitEl.classList.add("active");

    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      btnIcon.classList.remove("rotating");
    })
}

function initGoogleTranscriptParser() {

  document
    .getElementById("docx")
    .addEventListener("change", event => {

      handleFileSelect(event.target.files[0]);

    }, false);

  function parseNames() {

  }
  // google-meet-names

  function convertArrayBufferToText(arrayBuffer) {

    // mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
    return mammoth.extractRawText({ arrayBuffer: arrayBuffer })
      .then(function (result) {
        const lines = result.value.split('\n');

        const attendees = [];

        lines.some((line, idx) => {

          if (line.indexOf("Attendees") > -1) {

            lines[idx + 2]
              .split(",")
              .map(name => name.trim())
              .filter(name => {
                return name.indexOf("'s Presentation") === -1;
              })
              .forEach(name => {
                attendees.push(name);
              });

            return true;

          }
        });

        return attendees;


      })
      .catch(function (e) {
        console.log(e);
      })

  }

  function handleFileSelect(file) {

    const reader = new FileReader();
    reader.onload = async function (loadEvent) {

      const arrayBuffer = loadEvent.target.result;
      const attendees = await convertArrayBufferToText(arrayBuffer);
      // console.log(attendees);
      const textarea = document.querySelector("#google-meet-names")
      textarea.value = attendees.join("\n");
      textarea.focus();
      textarea.select();

    };

    reader.readAsArrayBuffer(file);

  }

  const dropArea = document.getElementById('drop-area');

  // Prevent the default behavior for file drop (open as a link)
  dropArea.addEventListener('dragover', function (e) {
    e.preventDefault();
    dropArea.classList.add('dragging'); // Add a class to highlight the drop area
  });

  // Reset the drop area's style when the user leaves
  dropArea.addEventListener('dragleave', function () {
    dropArea.classList.remove('dragging'); // Remove the highlight class
  });

  dropArea.addEventListener('drop', function (e) {
    e.preventDefault();
    dropArea.classList.remove('dragging'); // Remove the highlight class
    return handleFileSelect(e.dataTransfer.files[0]);

    const file = e.dataTransfer.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (loadEvent) {
        const arrayBuffer = loadEvent.target.result;
        convertArrayBufferToText(arrayBuffer);
      };

      reader.readAsArrayBuffer(file);

    }
  });

}

function initGoldenLayout({ colA, config }) {

  const tabsEl = document.querySelector("script#tabs-json");
  const tabsJSON = JSON.parse(tabsEl.textContent);
  const mainTab = config.content[0].content[0].content;

  Object.entries(tabsJSON.tabs).forEach(([title, URL]) =>{
    const newTab = {
      type: 'component',
      title,
      componentName: 'Cockpit',
      componentState: { id: 'ChatGPT', isDynamicTab: true, title, URL }
    }
    mainTab.push(newTab);
  })


  var myLayout = new GoldenLayout(config);

  myLayout.registerComponent('Cockpit', function (container, componentState) {

    if (componentState.label === "A") {

      colA.removeAttribute("hidden");
      container.getElement().html(colA);

    } else if (componentState.isDynamicTab) {

      console.log(componentState.title)
      console.log(componentState.URL)
      container.getElement().html(`<iframe style="height:100%; width:100%;" src="${componentState.URL}">`);

    } else if (componentState.isTranscriptComponent) {

      container.getElement().html(googleTranscriptParserHTML);

    } else {

      container.getElement().html(
        `
        <div class="lm_content--inner">
          <h4>Under construction...</h4>
        </div>
        `
      );

    }

  });

  myLayout.init();
}
function initThemeToggler() {

  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {

    if (currentTheme === 'light') {
      toggleSwitch.checked = false;
      document.querySelector("head #gl-light-theme").setAttribute("rel", "stylesheet");
      document.querySelector("head #gl-dark-theme").setAttribute("rel", "x");
    }

  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.querySelector("head #gl-light-theme").setAttribute("rel", "x");
      document.querySelector("head #gl-dark-theme").setAttribute("rel", "stylesheet");
      localStorage.setItem('theme', 'dark');
    } else {
      document.querySelector("head #gl-dark-theme").setAttribute("rel", "x");
      document.querySelector("head #gl-light-theme").setAttribute("rel", "stylesheet");
      localStorage.setItem('theme', 'light');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);


}
// ACTION!

function init(e) {

  console.log("Instructor Cockpit v0.1 (beta)");

  const appWrapper = document.querySelector(".app-wrapper");

  initGoldenLayout({ colA: appWrapper, config: goldenLayoutConfig });
  initGoogleTranscriptParser();

  studentList.addEventListener("click", e => {

    const { target } = e;

    if (target.classList.contains("student-progress-btn")) {
      handleProgressDisplay(target);
    }
    if (target.classList.contains("student-repo-sync")) {
      handleRepoSyncInfo(target);
    }

  });

  studentList.addEventListener("change", e => {

    const { target } = e;

    // Trimester Selection:
    if (target.getAttribute("name") === "trimester-selection") {
      const studentId = target.parentElement.getAttribute("data-student");
      if (currentlySelectedStudents[studentId]) {
        currentlySelectedStudents[studentId].trimester = target.value;
      } else {
        currentlySelectedStudents[studentId] = {
          trimester: target.value
        }
      }
      handleWeekSelection(studentId)
    }

    // Week Selection:
    if (target.getAttribute("name") === "week-selection") {

      const studentId = target.parentElement.getAttribute("data-student");
      if (currentlySelectedStudents[studentId]) {
        currentlySelectedStudents[studentId].week = target.value;
      } else {
        currentlySelectedStudents[studentId] = {
          week: target.value
        }
      }

      // Do not update sheet if no week has been selected:
      if (target.selectedIndex === 0) {
        return;
      }

      handleWeekSelection(studentId)
    }

    // Day Selection:
    if (target.getAttribute("name") === "day-selection") {
      const studentId = target.parentElement.getAttribute("data-student");
      if (currentlySelectedStudents[studentId]) {
        currentlySelectedStudents[studentId].day = target.value;
      } else {
        currentlySelectedStudents[studentId] = {
          day: target.value
        }
      }
      handleWeekSelection(studentId)
    }

  });

  initThemeToggler(); // Dark/Light Theme Switcher

}



document.addEventListener("DOMContentLoaded", init);