const menuItems = [
  "Upload Resource", // 0
  "Find Video",      // 1
  "Find Resource",   // 2
];

// console.log("headerMenu.js");
// const html = `
//   <a href="#" class="active">Find Job</a>
//   <a href="#">Company Review</a>
//   <a href="#">Find Salaries</a>
// `

let html = "";
for ( const menuItem of menuItems ){
  // This runs 3 times
  if ( menuItem === menuItems[0] ){
    html += `<a class="active" href="#">${menuItem}</a>`;
  } else {
    html += `<a href="#">${menuItem}</a>`;
  }
}

const headerMenuEl = document.querySelector("nav.header-menu");

headerMenuEl.innerHTML = html;