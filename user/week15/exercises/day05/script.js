console.clear();
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
// const ms = 500;
  const openBtn = document.getElementById("openBtn");
// PRACTICE: Have a button show the modal (not the timer)
// setTimeout(()=>{
openBtn.addEventListener("click", function() {
  // openBtn.style.display = "inline-block";
   modalWrapper.style.display = "grid";
  document.body.style.overflow = "hidden";
});
close.addEventListener("click", function(){
   modalWrapper.style.display = "none";
  document.body.style.overflow = "auto";
});

// modalWrapper.addEventListener also does not do the trick
modalWrapper.addEventListener("click", function(){
  // CHALLENGE: This gets triggered on close (x), outside area, but also
  // inside the modal (which we don't want)
   modalWrapper.style.display = "none";
  document.body.style.overflow = "auto";
})

modal.addEventListener("click", function(event){
  const triggeringEl = event.target;
  const listeningEl = event. currentTarget;
  console.log(triggeringEl,"\n--\n",listeningEl);
  
if (event.target.innerText.includes("ACCEPT COOKIES")) {
    modalWrapper.style.display = "none";
    document.body.style.overflow = "auto";
  }

  event.stopPropagation();

  
});
/*
  .style.display = "grid" 
  .style.color = "red" 
    => 
   <div style="display:grid; color:red">
*/