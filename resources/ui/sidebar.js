const html = `
  <div class="alert">
    <div class="alert-title">Search by title</div>
    <div class="alert-subtitle">Enter a keyword to search resource titles</div>
    <input type="text" placeholder="Enter title keyword">
    <button class="search-buttons">Search</button>
  </div>
  <div class="job-time">
    <div class="job-time-title">Type of Resource</div>
    <div class="job-wrapper">
      <div class="type-container">
        <input type="checkbox" id="job1" class="job-style" checked>
        <label for="job1">YouTube Videos</label>
        <span class="job-number">56</span>
      </div>
      <div class="type-container">
        <input type="checkbox" id="job2" class="job-style">
        <label for="job2">YouTube Playlists</label>
        <span class="job-number">43</span>
      </div>
      <div class="type-container">
        <input type="checkbox" id="job3" class="job-style">
        <label for="job3">Blog Posts</label>
        <span class="job-number">24</span>
      </div>
      <div class="type-container">
        <input type="checkbox" id="job4" class="job-style">
        <label for="job4">Internship Jobs</label>
        <span class="job-number">27</span>
      </div>
      <div class="type-container">
        <input type="checkbox" id="job5" class="job-style">
        <label for="job5">Contract</label>
        <span class="job-number">76</span>
      </div>
      <div class="type-container">
        <input type="checkbox" id="job6" class="job-style">
        <label for="job6">Training Jobs</label>
        <span class="job-number">28</span>
      </div>
    </div>
  </div>
`

const searchTypeEl = document.querySelector(".search-type");

searchTypeEl.innerHTML = html;
