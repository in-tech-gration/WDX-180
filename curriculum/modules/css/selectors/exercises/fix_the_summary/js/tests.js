;(function initCSSChallenge(){

  let errorsEl;

  function init(){

    function checkIsColor( r, g, b, a ){
      return function( computedColor ){
        const rgbaRegex = /(rgba?)|(\d+(\.\d+)?%?)|(\.\d+)/g;
        const matchBorderColor = computedColor.match(rgbaRegex);
        if ( matchBorderColor ){
          const [ _, _r, _g, _b, _a ] = matchBorderColor;
          const hasAlpha = !!_a;
          const isAlpha1 = hasAlpha ? _a === ""+a : true;
          const isColorBlack = ( _r === ""+r && _g === ""+g && _b === ""+b && isAlpha1);
          if ( isColorBlack ){
            return true;
          }
        } 
        return false;
      }
    }

    const checkIsColorBlack = checkIsColor(0,0,0,1);
    const checkIsColorYellowGreen = checkIsColor(154,205,50,1);
    const checkIsColorTransparent = checkIsColor(0,0,0,0);

    function _checkIsColorBlack( computedColor ){
      const rgbaRegex = /(rgba?)|(\d+(\.\d+)?%?)|(\.\d+)/g;
      const matchBorderColor = computedColor.match(rgbaRegex);
      if ( matchBorderColor ){
        const [ _, r, g, b, a ] = matchBorderColor;
        const hasAlpha = !!a;
        const isAlpha1 = hasAlpha ? a === "1" : true;
        const isColorBlack = ( r === "0" && g === "0" && b === "0" && isAlpha1);
        if ( isColorBlack ){
          return true;
        }
      } 
      return false;
    
    }

    const details = document.querySelector("body details:first-of-type");
    const summary = details.querySelector("body details:first-of-type > summary"); 
    const summaries = Array.from(details.querySelectorAll("summary")).slice(1);
    const computedStyle = getComputedStyle(summary);
    const bgColor = computedStyle.backgroundColor;
    const isBgColorBlack = checkIsColorBlack(bgColor);
    if ( !isBgColorBlack ){
      throw new Error("Ops! Background color for the main <summary> element should be black!");
    } 
    if ( computedStyle.padding !== "16px" ){
      throw new Error("Ops! Padding for the main <summary> should be 16px!");
    }
    if ( computedStyle.borderWidth !== "4px" ){
      console.log(computedStyle.borderWidth);
      throw new Error("Ops! Border width for the main <summary> should be 2px!");
    }
    if ( computedStyle.borderStyle !== "solid" ){
      throw new Error("Ops! Border style for the main <summary> should be 'solid'!");
    }
    const isBorderColorYellowGreen = checkIsColorYellowGreen(computedStyle.borderColor);

    if ( !isBorderColorYellowGreen ){
        throw new Error("Ops! Border color for the main <summary> element should be yellowgreen!");
    } 

    summaries.forEach( s =>{
      const computedStyle = getComputedStyle(s);
      if (computedStyle.borderStyle !== "none"){
        throw new Error("Ops! The inner <summary> border style should not exist!");
      }
      if (computedStyle.borderWidth !== "0px"){
        throw new Error("Ops! The inner <summary> border width should be 10px!");
      }
      if (computedStyle.padding !== "0px"){
        throw new Error("Ops! The inner <summary> padding should be 0px!");
      }
      if (checkIsColorBlack(computedStyle.backgroundColor) ){
        throw new Error("Ops! The inner <summary> background color should not be black!");
      }
      if (checkIsColorBlack(computedStyle.borderColor) ){
        throw new Error("Ops! The inner <summary> border color should not be black!");
      }
      if ( !checkIsColorTransparent(computedStyle.backgroundColor) ){
        throw new Error("Ops! The inner <summary> background color should be transparent!");
      }
      
    })
  }
  document.addEventListener("DOMContentLoaded", e =>{

    const style = document.querySelector("#styles style");
    wdx_exercisePack.confettiInit();

    function doCheck(){
      try {
        errorsEl = document.querySelector("#errors");
        init();
        console.log("Everything looks good! Congratulations!");
        errorsEl.querySelector("p").textContent = "";
        errorsEl.removeAttribute("class");
        style.removeAttribute("contenteditable");
        document.body.style.backgroundColor = "limegreen";
        wdx_exercisePack.confetti();
      } catch(e){
        document.body.style.backgroundColor = "tomato";
        errorsEl.querySelector("p").textContent = e.message;
        errorsEl.setAttribute("class", "active");
        console.log(e);
      }
    }

    doCheck();

    // const event = "input";
    const event = "keyup";
    style.addEventListener(event, e =>{
      console.log(e.type);
      doCheck();
    });

  });

}());
