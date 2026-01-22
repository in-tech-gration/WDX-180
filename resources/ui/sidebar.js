const entries = [
  { type: "YouTube Videos", count: 56, checked: true },
  { type: "YouTube Playlists", count: 10, checked: false },
  { type: "Blog Posts", count: 20, checked: true },
];
let entriesHTML = "";
let counter = 0;

for ( const entry of entries ){

  counter++;
  const isChecked = entry.checked;
  let checked = ""; 
  if ( isChecked ){
    checked = "checked";
  }
  entriesHTML += `
    <div class="type-container">
      <input type="checkbox" id="resource${counter}" class="job-style" ${checked}>
      <label for="resource${counter}">${entry.type}</label>
      <span class="job-number">${entry.count}</span>
    </div>
  `

}

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
`


const searchTypeEl = document.querySelector(".search-type");

searchTypeEl.innerHTML = html;
