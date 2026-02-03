export default function renderSearchResults(resources){

  const startFrom = 0; // -> 10 -> 10 -> ...
  const endAt = 10; // -> 20 -> 30 -> ...

  // Q: How can I show only 10 entries?
  // 1) Use slice()? (Arrays) -> We have to convert an object into an Array
  // Object.values(OBJECT) => Array of the OBJECT's values
  // Play around with Object.keys(), Object.entries(), Object.values()
  let entriesHTML = "";
  // Uncaught TypeError: Cannot convert undefined or null to object
  const entries = Object.values(resources);
  const first10entries = entries.slice(startFrom, endAt);
  for ( const entry of  first10entries ){
    // console.log(entry);
    entriesHTML += `<li>${entry.title}</li>`;
  }

  // Pagination: 10 of 160 -> 20 of 160 -> 30 of 160

  // 2) Create a counter, increment, use modulo % (for pagination)
  // 3) Create a counter and break on 10
  // let counter = 1;
  // for ( const entry in resources ){
  //   if ( counter === 11 ){
  //     break;
  //   }
  //   // console.log(entry); // Object key (property)
  //   console.log(counter, resources[entry]); // Object value
  //   counter++;
  // }

  const el = document.querySelector("#search-results");
  const html = `
    <ul>${entriesHTML}</ul>
    <button disabled>Prev 10</button>
    <button>Next 10</button>
  `
  el.innerHTML = html;

}
