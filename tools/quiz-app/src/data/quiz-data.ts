import type { QuizDataStructure } from "@/types/quiz"

export const quizData: QuizDataStructure = {
  html: {
    semantic: {
      title: "Semantic Elements",
      disabled: true,
      description: "Test your knowledge of semantic HTML elements",
      questions: [
        {
          question: "Which HTML element is used to define the main content of a document?",
          options: ["<main>", "<content>", "<primary>", "<body>"],
          correctAnswer: 0,
          level: "easy",
        },
        {
          question: "Looking at the code above, what is the purpose of the <article> element?",
          options: [
            "To create a sidebar",
            "To define independent, self-contained content",
            "To create a navigation menu",
            "To define a footer section",
          ],
          correctAnswer: 1,
          level: "medium",
          code: {
            language: "html",
            content: `
            <article>
              <header>
                <h2>Understanding React Hooks</h2>
                <p>Published on March 15, 2024</p>
              </header>
              <p>React Hooks allow you to use state and other React features...</p>
              <footer>
                <p>Tags: React, JavaScript, Web Development</p>
              </footer>
            </article>`,
          },
        },
        {
          question: "Which element should be used for a group of navigation links?",
          options: ["<menu>", "<nav>", "<links>", "<navigation>"],
          correctAnswer: 1,
          level: "easy",
        },
      ],
    },
    forms: {
      title: "Forms",
      disabled: true,
      description: "Learn about HTML form elements and attributes",
      questions: [
        {
          question: "In the form above, which input type is used for email validation?",
          options: ['type="mail"', 'type="email"', 'type="e-mail"', 'type="validate"'],
          correctAnswer: 1,
          level: "easy",
          code: {
            language: "html",
            content: `
              <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                
                <button type="submit">Sign Up</button>
              </form>`,
          },
        },
        {
          question: "What attribute makes a form field required?",
          options: ["mandatory", "required", "validate", "necessary"],
          correctAnswer: 1,
          level: "easy",
        },
      ],
    },
  },
  css: {
    grid: {
      disabled: true,
      title: "CSS Grid",
      description: "Master CSS Grid layout system",
      questions: [
        {
          question: "Which property is used to create a CSS Grid container?",
          options: ["display: flex", "display: grid", "grid-template", "grid-container"],
          correctAnswer: 1,
          level: "easy",
        },
        {
          question: "Looking at the CSS above, what does the 'fr' unit represent?",
          options: ["Fraction of available space", "Fixed ratio", "Frame rate", "Font ratio"],
          correctAnswer: 0,
          level: "medium",
          code: {
            language: "css",
            content: `
              .container {
                display: grid;
                grid-template-columns: 1fr 2fr 1fr;
                grid-template-rows: auto 1fr auto;
                gap: 20px;
                height: 100vh;
              }

              .header {
                grid-column: 1 / -1;
              }

              .sidebar {
                grid-column: 1;
              }

              .main {
                grid-column: 2;
              }`,
          },
        },
        {
          question: "Which property defines the size of grid columns?",
          options: ["grid-columns", "grid-template-columns", "column-template", "grid-column-size"],
          correctAnswer: 1,
          level: "medium",
        },
      ],
    },
    flexbox: {
      title: "Flexbox",
      disabled: true,
      description: "Understanding flexible box layout",
      questions: [
        {
          question: "Which property makes an element a flex container?",
          options: ["flex: container", "display: flex", "flex-direction", "flex-wrap"],
          correctAnswer: 1,
          level: "easy",
        },
        {
          question: "Based on the CSS above, what will happen to the flex items?",
          options: [
            "Items will be arranged in a column",
            "Items will be centered both horizontally and vertically",
            "Items will wrap to the next line",
            "Items will have equal spacing between them",
          ],
          correctAnswer: 1,
          level: "medium",
          code: {
            language: "css",
            content: `
              .flex-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                gap: 20px;
              }

              .flex-item {
                padding: 20px;
                background-color: #3498db;
                border-radius: 8px;
              }`,
          },
        },
      ],
    },
  },
  javascript: {
    promises: {
      disabled: true,
      title: "Promises",
      description: "Asynchronous programming with Promises",
      questions: [
        {
          question: "Which method is used to handle a resolved Promise?",
          options: [".catch()", ".then()", ".finally()", ".resolve()"],
          correctAnswer: 1,
          level: "easy",
        },
        {
          question: "What will be logged to the console when this code runs?",
          options: [
            "Loading... then Success!",
            "Loading... then Error occurred",
            "Only Loading...",
            "Success! then Loading...",
          ],
          correctAnswer: 0,
          level: "hard",
          code: {
            language: "javascript",
            content: `
              console.log("Loading...");
              const fetchData = () => {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve("Success!");
                  }, 1000);
                });
              };

              fetchData()
                .then(result => {
                  console.log(result);
                })
                .catch(error => {
                  console.log("Error occurred");
                });`,
          },
        },
        {
          question: "Which keyword is used with async functions to wait for a Promise?",
          options: ["wait", "await", "pause", "defer"],
          correctAnswer: 1,
          level: "medium",
        },
      ],
    },
    arrays: {
      disabled: true,
      title: "Arrays",
      description: "Array methods and manipulation",
      questions: [
        {
          question: "Which method adds elements to the end of an array?",
          options: ["append()", "push()", "add()", "insert()"],
          correctAnswer: 1,
          level: "easy",
        },
        {
          question: "What will be the output of the code above?",
          options: ["[2, 4, 6, 8, 10]", "[1, 2, 3, 4, 5]", "[1, 4, 9, 16, 25]", "[10, 8, 6, 4, 2]"],
          correctAnswer: 0,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              const numbers = [1, 2, 3, 4, 5];

              const result = numbers
                .map(num => num * 2)
                .filter(num => num <= 10);

              console.log(result);`,
          },
        },
      ],
    },
    hoisting: {
      title: "Hoisting",
      description: "",
      questions: [
        {
          question: "Question: What is the purpose of hoisting in JavaScript?",
          options: [
            "Enhancing code readability",
            "Optimizing code execution",
            "Handling variable and function declarations before code execution"
          ],
          correctAnswer: 2,
          level: "medium",
        },
        {
          question: "Which keyword has block-level scope in JavaScript and does not exhibit hoisting like var?",
          options: [
            "let",
            "const",
            "both",
            "none",
          ],
          correctAnswer: 2,
          level: "medium",
        },
        {
          question: "What is the output of the following code?",
          options: [
            "ReferenceError",
            "undefined and 20",
            "20 and 20"
          ],
          correctAnswer: 0,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              console.log(b);
              let b = 20;
              console.log(b);
            `,
          }
        },
        {
          question: "What happens during the hoisting phase for variable declarations with var?",
          options: [
            "Initialization is moved to the top of the scope",
            "Only declaration is moved to the top of the scope",
            "Entire variable assignment is moved to the top of the file"
          ],
          correctAnswer: 1,
          level: "medium",
        },
        {
          question: "What is the output of the following code?",
          options: [
            "undefined and 15",
            "ReferenceError",
            "15 and 15"
          ],
          correctAnswer: 0,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              console.log(c);
              var c = 15;
              console.log(c);
            `,
          }
        },
        {
          question: "In JavaScript, are function declarations hoisted before or after variable declarations?",
          options: [
            "Before",
            "After",
            "It depends on the specific scenario"
          ],
          correctAnswer: 0,
          level: "medium",
        },
        {
          question: "What is the output of the following code?",
          options: [
            "Hi!",
            "ReferenceError",
            "undefined"
          ],
          correctAnswer: 0,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              sayHi();

              function sayHi() {
                console.log("Hi!");
              }
            `,
          }
        },
        {
          question: "Do function expressions assigned to variables get hoisted like function declarations?",
          options: [
            "Yes",
            "No",
          ],
          correctAnswer: 1,
          level: "medium",
        },
        {
          question: "What is the output of the following code?",
          options: [
            "ReferenceError",
            "Greetings!",
            "undefined",
          ],
          correctAnswer: 2,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              console.log(greet);
              var greet = function() {
                console.log("Greetings!");
              };
            `,
          }
        },
        {
          question: "How does JavaScript handle the hoisting of duplicated function declarations?",
          options: [
            "Raises an error",
            "Overwrites the previous declaration",
            "Appends the new declaration"
          ],
          correctAnswer: 1,
          level: "medium",
        },
        {
          question: "What is the output of the following code?",
          options: [
            "undefined, 20, 10",
            "10, 20, 10",
            "10, undefined, 20",
            "10, undefined, undefined",
            "10, 20, undefined",
          ],
          correctAnswer: 0,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              var a = 10;
              function example() {
                console.log(a);
                var a = 20;
                console.log(a);
              }
              example();
              console.log(a);
            `,
          }
        },
        {
          question: "What is the output of the following code?",
          options: [
            "undefined and 25",
            "25 and 25",
            "ReferenceError",
          ],
          correctAnswer: 2,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              if (true) {
                console.log(d);
                let d = 25;
                console.log(d);
              }
            `,
          }
        },
        {
          question: "What is the output of the following code?",
          options: [
            "undefined and 30",
            "ReferenceError",
            "30 and 30",
          ],
          correctAnswer: 1,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              console.log(x);
              let x = 30;
              console.log(x);            
            `,
          }
        },
        {
          question: "What is the output of the following code?",
          options: [
            "35 and 35",
            "ReferenceError",
            "undefined and 35",
          ],
          correctAnswer: 2,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              function test() {
                console.log(y);
                var y = 35;
                console.log(y);
              }
              test();
            `,
          }
        },
        {
          question: "What is the output of the following code?",
          options: [
            "undefined, Nested, undefined",
            "ReferenceError",
            "undefined, Nested, Nested",
          ],
          correctAnswer: 2,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              function demo() {
                console.log(z);
                if (true) {
                  var z = "Nested";
                  console.log(z);
                }
                console.log(z);
              }

              demo();
            `,
          }
        },
        {
          question: "Can function declarations be hoisted inside block-level scopes?",
          options: [
            "Yes",
            "No",
          ],
          correctAnswer: 0,
          level: "medium",
        },
        {
          question: "What is the output of the following code?",
          options: [
            "ReferenceError",
            "undefined, 40, 45",
            "undefined, 45, 45",
          ],
          correctAnswer: 1,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              console.log(i);
              var i = 40;
              console.log(i);
              var i = 45;
              console.log(i);
            `,
          }
        },
        {
          question: "Can you hoist function declarations inside a function?",
          options: [
            "Yes",
            "No",
          ],
          correctAnswer: 0,
          level: "medium",
        },
        {
          question: "Can you hoist function expressions inside a function?",
          options: [
            "Yes",
            "No",
          ],
          correctAnswer: 1,
          level: "medium",
        },
        {
          question: "What is the output of the following code?",
          options: [
            "undefined, Inner, undefined",
            "ReferenceError",
            "undefined, Inner, Inner",
          ],
          correctAnswer: 2,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              function outerFunction() {
                console.log(innerVar);
                if (true) {
                  var innerVar = "Inner";
                  console.log(innerVar);
                }
                console.log(innerVar);
              }

              outerFunction();
            `,
          }
        },
        {
          question: "Which keyword is associated with block-scoped variables in JavaScript?",
          options: [
            "var",
            "let",
            "const",
            "let and const",
            "let and var",
          ],
          correctAnswer: 3,
          level: "medium",
        },
        {
          question: "How are function expressions hoisted in JavaScript?",
          options: [
            "Only the variable declaration is hoisted",
            "Both the variable declaration and the function body are hoisted",
            "Function expressions are not hoisted",
          ],
          correctAnswer: 0,
          level: "medium",
        },
        {
          question: "What is the output of the following code?",
          options: [
            "undefined, 30, 25",
            "25, 30, 25",
            "25, undefined, 30"
          ],
          correctAnswer: 0,
          level: "medium",
          code: {
            language: "javascript",
            content: `
              var m = 25;
              function demo() {
                console.log(m);
                var m = 30;
                console.log(m);
              }
              demo();
              console.log(m);
            `,
          }
        },
      ]
    }
  },
  react: {
    hooks: {
      title: "React Hooks",
      disabled: true,
      description: "Understanding React Hooks",
      questions: [
        {
          question: "Which hook is used for managing component state?",
          options: ["useEffect", "useState", "useContext", "useReducer"],
          correctAnswer: 1,
          level: "easy",
        },
        {
          question: "What will happen when the button is clicked in the component above?",
          options: [
            "The count will increase by 1",
            "The count will increase by 2",
            "The count will reset to 0",
            "Nothing will happen",
          ],
          correctAnswer: 0,
          level: "medium",
          code: {
            language: "jsx",
            content: `
            
              import React, { useState } from 'react';

              function Counter() {
                const [count, setCount] = useState(0);

                const handleClick = () => {
                  setCount(prevCount => prevCount + 1);
                  setCount(prevCount => prevCount + 1);
                };

                return (
                  <div>
                    <p>Count: {count}</p>
                    <button onClick={handleClick}>
                      Increment
                    </button>
                  </div>
                );
              }`,
          },
        },
        {
          question: "What is the purpose of the dependency array in useEffect?",
          options: [
            "To pass props to the effect",
            "To control when the effect runs",
            "To define state variables",
            "To handle errors",
          ],
          correctAnswer: 1,
          level: "hard",
        },
      ],
    },
    components: {
      title: "React Components",
      disabled: true,
      description: "Component creation and lifecycle",
      questions: [
        {
          question: "What is JSX?",
          options: ["A JavaScript library", "A syntax extension for JavaScript", "A CSS framework", "A testing tool"],
          correctAnswer: 1,
          level: "easy",
        },
        {
          question: "In the component above, how is data passed from parent to child?",
          options: ["Through state", "Through props", "Through context", "Through refs"],
          correctAnswer: 1,
          level: "easy",
          code: {
            language: "jsx",
            content: `
              function Parent() {
                const message = "Hello from parent!";
                const user = { name: "John", age: 25 };

                return (
                  <div>
                    <Child greeting={message} userInfo={user} />
                  </div>
                );
              }

              function Child({ greeting, userInfo }) {
                return (
                  <div>
                    <h1>{greeting}</h1>
                    <p>Name: {userInfo.name}</p>
                    <p>Age: {userInfo.age}</p>
                  </div>
                );
              }`,
          },
        },
      ],
    },
  },
}
