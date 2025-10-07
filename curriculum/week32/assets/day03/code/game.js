const mainfont = '14pt "ITC Machine Std"';

// Function to load an image asynchronously
async function loadImage(url) {
  return new Promise((resolve, reject) => {
    const elem = new Image();
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}
async function loadImages(){
  const img = await loadImage("https://i.pinimg.com/originals/fa/a3/57/faa357ed90844cc8dc4e38da7384bfba.jpg");
  document.body.appendChild(img);
}
loadImages();

function simpleFn() {
  return 42;
}
// => Turned into this using the async keyword:
async function asyncFn() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.4) {
      resolve();
      // resolve("You win!");
    } else {
      reject();
      // reject("You lost");
    }
  })
}
// To do this manually (explicitly)
function simpleFnTurnedAsync() {
  return new Promise((resolve, reject) => {
    resolve(42);
  })
}

promises_with_and_without_values: {

  function PromiseWithoutFFValue() {
    return new Promise((res, rej) => {
      res();
    })
  }
  function PromiseWithFFValue() {
    return new Promise((res, rej) => {
      res([42,43]);
    })
  }
  async function runCode(){
    PromiseWithoutFFValue()
    PromiseWithFFValue()
    const output = await PromiseWithoutFFValue();
    console.log( output ) // undefined
    const result = await PromiseWithFFValue();
    console.log( result ) // [42,43]
  }
  runCode();
}

// When a function has the async keyword, you know that you can use these:
// await loadImage();
// or:
// loadImage().then().catch();
// ...because async functions ALWAYS return a Promise
// and a Promise can be resolved using either of these methods.
// await fetch()
// fetch().then().catch()

// document.fonts.load(mainfont).then(() => {
          //   createCells(ctxPlayer, lettersArray);
          // });

          // CAUTION: Might be slow
          // window.addEventListener("load", ()=>{});
          console.clear();

document.addEventListener("DOMContentLoaded",()=>{

  const gameResources = [
        "https://i.pinimg.com/originals/fa/a3/57/faa357ed90844cc8dc4e38da7384bfba.jpg",
        "https://img.craftpix.net/2020/02/Field-Enemies-Game-Sprite-Sheets-Pixel-Art3.webp",
        "https://cdn.vectorstock.com/i/1000v/13/19/nimble-boy-game-sprites-vector-21861319.jpg",
        ];
        function onLoadImagesRun(callback){
          // Deal with Images, Fonts, Media, etc.
          // How to make sure that these resources (e.g. images) are ready for use by JS?
          let counter = 0; // 0 images loaded
        // Can we use delay? Can we use setTimeout()?
        // setInterval()??
        // Loop...
        const imgObjects = []; // length === 0
    gameResources.forEach( url =>{
      const img = new Image();
        imgObjects.push(img);
        img.src = url; // loading starts here. Start loading is sync. Loading is async.
      // console.log(img, img.complete);
      img.onload = ()=>{
          console.log(`Image with URL ${url} loaded...`);
        counter++;

        // Once loaded, the HTMLImageElement can be used like an <img>
        // document.body.appendChild(img);

          console.log(counter);
          if ( counter === gameResources.length ){
            callback();
        }
        // callback(); // Called 3 times. Not good.
      }
      // callback(); // Called 3 times before image loaded. Not good.
    });
  }

  // onLoadImagesRun(gameInit);
  // onLoadImagesRun(function(){
            //   console.log("Some other function");
            // });

            // One step further: pass an array of URLs
            // onLoadImagesRun(gameResources, gameInit);
            // onLoadImagesRun(["sprite.gif","splash.png","end.jpg"], gameInit);

            // Even better: have 2 callbacks handling success and error
            // onLoadImagesRun( gameResources, gameInit, onError );
            // Execute gameInit() on success loading
            // Execute onError() on loading errors

            success_error_callback_pattern:{

    break success_error_callback_pattern;
          // OF HIGH IMPORTANCE: Make sure to study these next lines and fully understand the logic. 
          function runCallbackAfter(onSuccess, onError){
      if ( Math.random() > 0.5 ){
            onSuccess();
      } else {
            onError();
      }
    }
          runCallbackAfter(gameInit, function(){
            console.log("Error function");
    });

    // SIDENOTE: Most of the times you'll find the onError callback first: writeToFile( onError, onSuccess )
  }

          detect_loading_setInterval: {
    break detect_loading_setInterval;
    // imgObjects.length === 3;
    const intervalId = setInterval(()=>{
            // console.log("150ms have passed");
            console.log(imgObjects.length);
          console.log(
          imgObjects[0].complete,
          imgObjects[1].complete,
          imgObjects[2].complete,
          );
          // complete length?
          // CHALLENGE: Use a loop to check that all imgObjects are complete.
          // IMPORTANT: We are going to be iterating over a lot of values so it makes sense to pick the most appropriate way to loop over these values.
          // Think of stopping iterating, when there's no need to. You can use for loop (probably the fastest way).
          // If you use Array methods, consider some() vs map() or forEach()
          if (
          imgObjects[0].complete
          && imgObjects[1].complete
          && imgObjects[2].complete
          ){
            console.log("All images have been loaded");
          clearInterval(intervalId);
      }
      // condition: === resources.length (3)
    },50);
  }

          detect_loading_setTimeout: {
    break detect_loading_setTimeout;
          const loadingTime = 400 * gameResources.length;
          setTimeout(function() {
            console.log("2 seconds have passed");
          console.log(
          imgObjects[0].complete,
          imgObjects[1].complete,
          imgObjects[2].complete,
          )
      // gameInit();
     }, loadingTime); // You will never be able to predict the order and loading times of the resources (images)
     // setTimeout is a highly unreliable way to make sure that images have loaded.
     // First attempt: use an arbitrary number, e.g. 2 seconds
     // Second attempt: calculate the loading time based on the number of images and some average loading time for a single image (still highly unreliable)
  }

          single_loading:{
    break single_loading;
          // Start loading your resources asynchronously
          const zombieCharacterImg = new Image();
    // zombieCharacterImg.onload = ()=>{ }
    // zombieCharacterImg.onerror = ()=>{ }
    zombieCharacterImg.addEventListener("load",()=>{
            console.log("Image loaded...");
          console.log("Start our game logic here");
          gameInit();
    });
    zombieCharacterImg.addEventListener("error",(err)=>{
            console.log("Error loading image", err);
    });
          // The .src is the thing that triggers an asynchronous loading of the image:
          zombieCharacterImg.src = gameResources[0] // +"ZZZZ"; Break loading intentionaly
  }

          function gameInit(){
            // contains the game logic
            document.body.innerHTML += "Game is ready ";
          console.log("All resources loaded. Game init");
  }


          // for loop i resources[] 
          //   const img = new Image()
          //   img.src = resources[i]

          document.body.innerHTML += "Hello!"
          // Do some basic stuff for showing a splash screen, game instructions, start game options...
          console.log('EoF');
  
});