const { clear, log } = console;
clear();
const level2 = document.querySelector(".level-2");
const level1 = document.querySelector(".level-1");
// log(level2);
// ELEMENT.addEventListener( EVENT_TYPE, CALLBACK_ FUNCTION)
function clickEventHandler(eventObject){ // event, ev, e
    console.log(2, eventObject.type, eventObject.target);
  }
level2.addEventListener(
  "click", 
  clickEventHandler,
  false
)
level1.addEventListener("click",function(){
  console.log(1, event.type, event.target)
},true)