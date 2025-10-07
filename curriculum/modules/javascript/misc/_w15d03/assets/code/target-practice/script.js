const gameBox = document.getElementById("game");
      const coordsEl = document.getElementById("coords");
      const targetEl = document.getElementById("target");

      gameBox.addEventListener("mousemove", handleMouseMove);

      function handleMouseMove(mouseMoveEventObject) {

        // The parameter of an event handler is an object that contains information
        // about the event. In the case of the "mousemove" event, it contains the coordinates
        // of the mouse cursor (x,y) on the document:
        console.log(mouseMoveEventObject.x, mouseMoveEventObject.y);

        // TASK #1: Display the current coordinates of the mouse (x,y) inside the div with id #coords. You can use innerText, innerHTML or textContent properties for updating the content of an HTML element in JavaScript:
        // Your code here...

        // When the mouse cursor's coordinate x is greater than 200px, 
        // and less than < 300px, it means that it is within the x boundaries of the orange box

        // TASK #2: Make sure that the color changes only when the mouse coordinates overlap
        // with the orange box's (#target) x AND y, and not just x. If you complete TASK #1, you should be able to easily find these y coordinates.
        // Alternatively, check the console. ;)

        // TASK #3: When the mouse moves out of the target element, turn the background color
        // back to "orange"
        if (mouseMoveEventObject.x > 200 && mouseMoveEventObject.x < 300) {
          targetEl.style.background = "limegreen";
        }
      }