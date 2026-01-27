// Move the HTML of the search-menu here:

function renderSearchMenu(data){

  console.log(data.resources);

  // 1) Define the HTML Content
  const html = `
    <div>Example</div>
    <div>Another line</div>
  `
  
  // 2) Target the container element (that will host the 'html')
  const searchMenuEl = document.querySelector(".search-menu");
  
  // 3) Insert the html into the container element:
  searchMenuEl.innerHTML = html;

}

export default renderSearchMenu;