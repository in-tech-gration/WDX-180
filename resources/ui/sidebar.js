// We need access to the JSON data, 'data.resources'
import { checkResult } from "./checkbox.js";
import  { searchButton }  from "./searchButton.js";
import renderSearchResults from "./searchResults.js";

/**
 * Find unique resource types.
 * @param {Object} resources - The resources object from JSON data.
 * @return {Array<string>} Array of unique types.
 */

function findType(resources) {
  let types = [];
  Object.values(resources).forEach((resource) => {
    if (!types.includes(resource.type)) {
      types.push(resource.type);
    }
  });
  return types;
}

/**
 * Count occurrences of each type.
 * @param {Object} resources - The resources object from JSON data.
 * @param {Array<string>} types - Array of unique types.
 * @return {Array<Object>} Array of objects with type, count, and checked status.
 */
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

/**
 * Generate HTML for the entries.
 * @param {Array<Object>} entries - Array of objects with type, count, and checked status.
 * @return {string} HTML string for the entries.
 */
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

/** Insert the generated HTML into the sidebar.
 * @param {string} entriesHTML - HTML string for the entries.
 */
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

export function sidebarAPI(data, resources) {
  let types = findType(resources);
  let entries = findTypeRepeat(resources, types);
  let entriesHTML = loopForEntries(entries);
  insertHTML(entriesHTML);
  checkResult(resources);
  searchButton(data);
  renderSearchResults(resources);
}

function renderSidebar(data) {
  sidebarAPI(data, data.resources);
}

export default renderSidebar;
