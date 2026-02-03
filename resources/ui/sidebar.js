// We need access to the JSON data, 'data.resources'
import { checkResult } from "./checkbox.js";
import  { searchButton }  from "./searchButton.js";

function findType(resources) {
  let types = [];
  Object.values(resources).forEach((resource) => {
    if (!types.includes(resource.type)) {
      types.push(resource.type);
    }
  });
  return types;
}

function findTypeRepeat(resources, types) {
  let counter;
  let entries = [];
  types.forEach((type) => {
    counter = 0;
    Object.values(resources).forEach((resource) => {
      if (resource.type === type) {
        counter++;
      }
    });
    let entry = { type: type, count: counter, checked: true };
    entries.push(entry);
  });
  return entries;
}

function loopForEntries(entries) {
  let entriesHTML = "";
  let counter = 0;
  for (const entry of entries) {
    counter++;
    const isChecked = entry.checked;
    let checked = "";
    if (isChecked) {
      checked = "checked";
    }
    entriesHTML += `
      <div class="type-container">
        <input type="checkbox" id="resource${counter}" class="job-style" ${checked}>
        <label for="resource${counter}">${entry.type}</label>
        <span class="job-number">${entry.count}</span>
      </div>
    `;
  }
  return entriesHTML;
}

function insertHTML(entriesHTML) {
  const html = `
  <div class="alert">
  <div class="alert-title">Search by title</div>
  <div class="alert-subtitle">Enter a keyword to search resource titles</div>
  <input type="text" placeholder="Enter title keyword">
  <button class="search-buttons">Search</button>
  </div>
  <div class="job-time">
    <div class="job-time-title">Type of Resource</div>
    <div class="job-wrapper">${entriesHTML}</div>
  </div>
      `;
  const searchTypeEl = document.querySelector(".search-type");
  searchTypeEl.innerHTML = "";
  searchTypeEl.innerHTML = html;
}

// function checkResult(resources) {
//   document.querySelector(".job-wrapper").addEventListener("click", (event) => {

//     const target = event.target;
//     const hasResourceId = target.id.includes("resource");

//     if (hasResourceId) {

//       let checkboxes = document.querySelectorAll(".job-wrapper input");
//       let checkedResult = {};
//       checkboxes.forEach((checkbox) => {
//         const labelElement = document.querySelector(
//           `.type-container label[for='${checkbox.id}']`,
//         );
//         let checkedText = labelElement.textContent;
//         if (checkbox.checked === true) {
//           Object.entries(resources).forEach(([key, value]) => {
//             if (value.type === checkedText) {
//               checkedResult[key] = value;
//             }
//           });
//         }
//       });
//       console.log(checkedResult);// necessary to keep, to show the result.
//       renderSearchResults(checkedResult);
//     }
//   });
// }

// function searchButton(data) {
//   let inputElement = document.querySelector(".alert input");
//   let buttonElement = document.querySelector(".alert button");
//   let searchResult;

//   buttonElement.addEventListener("click", () => {
//     searchResult = {};
//     Object.entries(data.resources).forEach(([key, value]) => {
//       if (key.includes(inputElement.value)) {
//         searchResult[key] = value;
//       }
//     });
//     sidebarAPI(data, searchResult);
//   });
// }

export function sidebarAPI(data, resources) {
  // this function find how many types do we have, return an array of types we have
  let types = findType(resources);
  // this function find how many times each type repeat, return an array of object of the info of each type
  let entries = findTypeRepeat(resources, types);
  // this function iterate though the array and put it into the HTML, return the HTML
  let entriesHTML = loopForEntries(entries);
  // this function will insert HTML
  insertHTML(entriesHTML);
  // this function make the check boxes work and filter the result
  checkResult(resources);
  // this function make the search button work
  searchButton(data);
}

function renderSidebar(data) {
  sidebarAPI(data, data.resources);
}

export default renderSidebar;
