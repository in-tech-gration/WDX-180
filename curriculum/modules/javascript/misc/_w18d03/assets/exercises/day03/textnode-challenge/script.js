console.clear();
function init() {

  // Select the elements with their respective classes
//   const firstElement = document.querySelector('.first');
//   const secondElement = document.querySelector('.second');
//   const thirdElement = document.querySelector('.third');
//   const fourthElement = document.querySelector('.fourth');

//   // Change the text content of each child element
//   firstElement.childNodes.forEach(node => {
//     if (node.nodeType === Node.TEXT_NODE) {
//       node.textContent = 'Magic island';
//     }
//   });

  const multiclasses = ['.first', '.second', '.third', '.fourth'];
  multiclasses.forEach((multiclass) => {
    // try/catch
    // 2 loops
    // condition
    const el = document.querySelector(multiclass); // => null OR HTMLElement
    if ( el !== null ){
      el.textContent = "Magic island";
    }
  });
}
document.addEventListener("DOMContentLoaded", init);