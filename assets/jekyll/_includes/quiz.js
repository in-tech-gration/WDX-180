;(function(){

  // Utility: Download Text File:
  function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  
  function initQuiz(){

      console.clear();
      const paragraphs = document.querySelectorAll(".main-section p");
      const questions = [];
      const responses = {};
  
      const style = document.createElement('style');
      style.textContent = `
          ul.selected[data-wdx-quiz-ul]{
              border-left: 4px solid lightgray;
          }
          ul[data-wdx-quiz-ul] li.selected {
              font-weight: bold;
              opacity: 1;
          }
          ul[data-wdx-quiz-ul] li {
              cursor: pointer;
              opacity: 0.8;

          }
          ul.selected[data-wdx-quiz-ul] li:not(.selected) {
              cursor: default;
              opacity: 0.35;

          }
          ul[data-wdx-quiz-ul]:not(.selected) li:hover {
              font-weight: bold;
              opacity: 1;
          }
      `;
      style.setAttribute("id","wdx-js-quiz")
      document.head.appendChild(style);

      function captureQuestions(e, question){
          const ul = e.currentTarget;
          const li = e.target;
          if ( li.nodeName === "LI" ){
              li.setAttribute("class", "selected");
              const answer = li.textContent.trim();
              responses[question] = answer;
          }

          if ( questions.length === Object.entries(responses).length ){
              alert("Congratulations! You've finished the quiz. Click the button to download your responses and make sure to copy the file to the appropriate exercises subfolder and submit.")
              download("response.json", JSON.stringify(responses, null, "\t"));
          } 

      }
      
      // console.log(paragraphs);
      paragraphs.forEach( p =>{
          const firstParagraphChild = p.children[0];
          const nodeName = firstParagraphChild ? firstParagraphChild.nodeName : null;
      
          if ( !nodeName || nodeName !== "STRONG" ){
              return;
          }
      
          const isQuestion = firstParagraphChild.textContent.indexOf("Question") === 0;
      
          if ( !isQuestion ){
              return;
          }
      
          const question = p.textContent;
          const ul = p.nextElementSibling;
          questions.push(question);
      
          if ( !ul ){
              return;
          }
          ul.setAttribute("data-wdx-quiz-ul", "true");
          let hasBeenAnswered = false;
          ul.addEventListener("click", (e)=> {
              if ( hasBeenAnswered ){
                  return;
              }
              hasBeenAnswered = true;
              ul.classList.add("selected");
              captureQuestions(e, question);
          })
      })

  }

  try {
      initQuiz();
  } catch(e){
      console.log("Error:Quiz", e);
  }

  
}());
