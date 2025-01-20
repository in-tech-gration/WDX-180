console.clear();
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const ms = 500;
// PRACTICE: Have a button show the modal (not the timer)
setTimeout(()=>{
   modalWrapper.style.display = "grid";
  document.body.style.overflow = "hidden";
}, ms);
close.addEventListener("click", function(){
   modalWrapper.style.display = "none";
  document.body.style.overflow = "auto";
});

// modalWrapper.addEventListener also does not do the trick
document.body.addEventListener("click", function(){
  // CHALLENGE: This gets triggered on close (x), outside area, but also
  // inside the modal (which we don't want)
   modalWrapper.style.display = "none";
  document.body.style.overflow = "auto";
})

modal.addEventListener("click", function(event){
  const triggeringEl = event.target;
  const listeningEl = event. currentTarget;
  console.log(triggeringEl,"\n--\n",listeningEl);
  event.stopPropagation();
});
/*
  .style.display = "grid" 
  .style.color = "red" 
    => 
   <div style="display:grid; color:red">
*/