const { clear,log } = console;
clear();
const table = document.querySelector("#excel");
// log(table);
table.addEventListener("click", handleCellClick);
function handleCellClick(event){
  const { target } = event;
  if ( target.nodeName !== "TD" ){
    return undefined;
    // return; === return undefined;     
  }
  const td = target;
  // .style does NOT affect these:
  // td { background: red; }
  // td.blah { background: red; }
  
  // <td style="background:hotpink;color:black;">
  td.style.background = "hotpink";
  td.style.color = "black";
  
  // td.remove();
}

// input + change event
const usernameInputEl = document.querySelector("#username");
usernameInputEl.addEventListener("input", function(event){
  const inputEl = event.target;
  // log( inputEl.value );
})
document.body.addEventListener("click", function(){
  log( usernameInputEl.value);
});