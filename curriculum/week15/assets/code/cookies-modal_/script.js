console.clear();
const closeBtn     = document.querySelector(".cs-close");
const modalWrapper = document.querySelector(".cs-wrapper");
const modal        = document.querySelector(".cs-message");

function close(event){
  
  console.log("close()");

  if ( event.currentTarget === modal ){
    return event.stopPropagation();
  }
  modalWrapper.style.display = "none"
  document.body.style.overflow = "auto";

}

function showModal(){

  modalWrapper.style.display   = "grid";
  document.body.style.overflow = "hidden";
  document.body.addEventListener("click", close);
  modal.addEventListener("click", close);
  closeBtn.addEventListener("click", close);

}

showModal();