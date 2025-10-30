function isLandscape(width, height){
  // YOUR CODE HERE >>
if (width > height){
    return true;
}else{
    return false;
}
  }

  // Don't worry about the code below. It's just there to test your code above.

  // RUNNING & TESTING OUR isLandscape() FUNCTION:
  console.assert( isLandscape, "Expecting isLandscape to be defined" );
  console.assert( typeof isLandscape === "function", "Expecting isLandscape to be a function" );

  const checkWidthHeight1 = isLandscape(800, 600);
  console.log('Landscape:',checkWidthHeight1); // Should be true

  const checkWidthHeight2 = isLandscape(600, 800);
  console.log('Landscape:',checkWidthHeight2); // Should be false
  
  const checkWidthHeight3 = isLandscape(600, 600);
  console.log('Landscape:',checkWidthHeight3); // Should be false

  const checkWidthHeight4 = isLandscape(1024, 768);
  console.log('Landscape:',checkWidthHeight4); // Should be true

  console.assert( checkWidthHeight1 === true, "Ops! Was expecting true.")
  console.assert( checkWidthHeight2 === false, "Ops! Was expecting false.")
  console.assert( checkWidthHeight3 === false, "Ops! Was expecting false.")
  console.assert( checkWidthHeight4 === true, "Ops! Was expecting true.")

  try {
    if ( global ){ global.isLandscape = isLandscape; }
  } catch(e){}