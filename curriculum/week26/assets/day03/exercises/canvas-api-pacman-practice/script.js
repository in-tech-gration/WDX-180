// Wireframe
let wireCanvas = document.querySelector( "canvas#wireframe" );
let wireframe = wireCanvas.getContext("2d");

wireframe.fillStyle = "yellow";
wireframe.ellipse( 150, 150, 100, 100, 0, 0, 2 * Math.PI );
wireframe.stroke();

wireframe.beginPath();
wireframe.fillStyle = "black";
wireframe.moveTo( 150, 150 );
wireframe.lineTo( 300, 100 );
wireframe.lineTo( 300, 200 );
wireframe.closePath();
wireframe.stroke();

// Start Here:
let canvas = document.querySelector( "canvas#output" );
let context = canvas.getContext("2d");