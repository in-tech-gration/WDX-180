import "./ui/header/logo.js";
import "./ui/header/headerMenu.js";
import "./ui/header/userSettings.js";
import "./ui/sidebar.js";
// LOAD DATA:
// fetch("resources.json")
// .then( response => response.json() )
// .then( data => {
//     console.log(data);
// })
// .catch( error => {
//    console.log(error); 
// });

// VARIABLE DECLARATION
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
const jobCards = document.querySelectorAll(".job-card");
const logo = document.querySelector(".logo");
const jobLogos = document.querySelector(".job-logos");
const jobDetailTitle = document.querySelector(
  ".job-explain-content .job-card-title"
);
const jobBg = document.querySelector(".job-bg");

// FUNCTION DECLARATION
const displayShadow = (e) => {
  e.target.scrollTop > 30
    ? header.classList.add("header-shadow")
    : header.classList.remove("header-shadow");
}

const displaySingleCard = (jobCard) => {

  const number = Math.floor(Math.random() * 10);
  const url = `https://unsplash.it/640/425?image=${number}`;
  jobBg.src = url;

  const logo = jobCard.querySelector("svg");
  const bg = logo.style.backgroundColor;
  jobBg.style.background = bg;
  const title = jobCard.querySelector(".job-card-title");
  jobDetailTitle.textContent = title.textContent;
  jobLogos.innerHTML = logo.outerHTML;
  wrapper.classList.add("detail-page");
  wrapper.scrollTop = 0;

}

const renderCards = (jobCard) => {
  jobCard.addEventListener("click", ()=>{
    displaySingleCard(jobCard);
  });
}

const scrollToTop = () => {
  wrapper.classList.remove("detail-page");
  wrapper.scrollTop = 0;
  jobBg.style.background = bg;
}

// INTERACTIONS
wrapper.addEventListener("scroll", displayShadow);
jobCards.forEach(renderCards);
logo.addEventListener("click", scrollToTop);
