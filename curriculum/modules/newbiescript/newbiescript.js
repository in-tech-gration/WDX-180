;(function(){

  // XRAY:
  if ( !window.xray ){
    window.xray = (...args) => console.log("🩻", ...args);
  }
  
  function renderErrorElement({ errorMessage, lineNumber }){

    const errorEl = document.createElement("div");
    errorEl.textContent = `🛑 JS ERROR: ${errorMessage} (line: ${lineNumber})`;
    errorEl.style.cssText = `position:fixed; font-family:sans-serif; color:red; margin:8px; z-index:99999; cursor:pointer; top:0; right:0;`
    document.body.appendChild(errorEl);

  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event
  window.addEventListener("error", (e) =>{
  
    try {
  
      // e.type, e.message, e.error.message, e.error.stack
      const stack  = e.error.stack.split(":");
      const col    = stack[stack.length-1]
      const lineNumber = stack[stack.length-2];
 
      renderErrorElement({ errorMessage: e.error.message, lineNumber });
      
    } catch(e){}
  
  });
  
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event
  window.addEventListener("unhandledrejection", e => {});
  
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/rejectionhandled_event
  window.addEventListener("rejectionhandled", e => {});

  console.log(`
    █▄░█ █▀▀ █░█░█ █▄▄ █ █▀▀ █▀ █▀▀ █▀█ █ █▀█ ▀█▀
    █░▀█ ██▄ ▀▄▀▄▀ █▄█ █ ██▄ ▄█ █▄▄ █▀▄ █ █▀▀ ░█░
    0.1.0 Loaded
  `);

}());
