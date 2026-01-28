// We need access to the JSON data, 'data.resources'

function findType(data) {
  let types = [];
  Object.values(data.resources).forEach((resource) => {
    if (!types.includes(resource.type)) {
      types.push(resource.type);
    }
  });
  return types;
}

function findTypeRepeat(data, types) {
  let counter;
  let entries = [];
  types.forEach((type) => {
    counter = 0;
    Object.values(data.resources).forEach((resource) => {
      if (resource.type === type) {
        counter++;
      }
    });
    let entry = { type: type, count: counter, checked: false };
    entries.push(entry);
  });
  console.log(entries);
  return entries;
}

function loopForEntries(entries) {
  let entriesHTML = "";
  let counter = 0;
  console.log(entries);
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

// function searchButton(data){

// }

function renderSidebar(data) {
  console.log(data.resources);
  // this function find how many types do we have, return an array of types we have
  let types = findType(data);
  // this function find how many times each type repeat, return an array of object of the info of each type
  let entries = findTypeRepeat(data, types);
  // this function iterate though the array and put it into the HTML, return the HTML
  let entriesHTML = loopForEntries(entries);

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



  searchTypeEl.innerHTML = html;
}

export default renderSidebar;
