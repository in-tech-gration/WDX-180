// 1) Declaring variables:
let price;
let userProps = "...";
const getRandomOffer = () => {
  const randomIndex = Math.floor(Math.random() * 0.5);
  return randomIndex
};
const color = "black";
const timeToLogout = 1000;

// 2) Define our functions
function doSomething(){
  getRandomOffer;
  console.log( ">>", getRandomOffer() );
}
function init(){
  setInterval(() => {
    console.log(getRandomOffer());
  }, 500);
  getRandomOffer();
  window.addEventListener("beforeunload", ()=>{});
}

// 3) Initializing the app (execute functions, initialize event listeners)
init();