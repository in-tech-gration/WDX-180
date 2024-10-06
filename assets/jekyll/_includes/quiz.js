const wdx_quiz = {

}

;(function () {

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

  function addStyle(){
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
              /* cursor: default; */
              opacity: 0.35;

          }
          /* ul[data-wdx-quiz-ul]:not(.selected) li:hover { */
          ul[data-wdx-quiz-ul] li:hover {
              font-weight: bold;
              opacity: 1 !important;
          }
      `;
    style.setAttribute("id", "wdx-js-quiz")
    document.head.appendChild(style);

  }

  function initQuiz() {

    // Grab all paragraphs found in the section.main <section>
    const paragraphs = document.querySelectorAll(".main-section p");
    const questions = []; // <= We are going to store the questions found on this quiz here
    const responses = {}; // <= We are going to store the questions and student responses here

    // We'll add some custom CSS styling to the quiz lists found on the page:
    addStyle();

    // Handle each response (selected answer)
    function captureQuestions(e, question) {

      // const ul = e.currentTarget;
      const li = e.target;

      if (li.nodeName === "LI") {
        li.setAttribute("class", "selected");
        const answer = li.textContent.trim();
        responses[question] = answer;
      }

      if (questions.length === Object.entries(responses).length) {

        const scriptWithExercisePath = document.body.querySelector("script#exercise_path");

        if (scriptWithExercisePath) {

          const exercise_path = scriptWithExercisePath.textContent.trim();

          alert(`Congratulations! You've finished the quiz. Click the button to download your responses and make sure to copy the file to the appropriate exercises subfolder (${exercise_path}/responses.json) and submit.`);

          // Download responses as a JSON text file:
          download(
            "response.json",
            JSON.stringify({
              exercise_path,
              responses,
            },
              null,
              "\t"
            )
          );
        }

      }

    }

    // Parse each paragraph found, get question and add click handlers so that the student can pick an answer:
    paragraphs.forEach(p => {

      const firstParagraphChild = p.children[0];
      const nodeName = firstParagraphChild ? firstParagraphChild.nodeName : null;

      if (!nodeName || nodeName !== "STRONG") {
        return;
      }

      const isQuestion = firstParagraphChild.textContent.indexOf("Question") === 0;

      if (!isQuestion) {
        return;
      }

      const question = p.textContent;
      const ul = p.nextElementSibling;
      questions.push(question);

      if (!ul) {
        return;
      }
      ul.setAttribute("data-wdx-quiz-ul", "true");

      ul.addEventListener("click", (e) => {
        ul.classList.add("selected");
        ul.querySelectorAll("li").forEach( li => li.removeAttribute("class"))
        captureQuestions(e, question);
      })
    })

  }

  try {
    initQuiz();
  } catch (e) {
    console.log("Error [jekyll/_includes/quiz.js]:Quiz", e);
  }


}());
