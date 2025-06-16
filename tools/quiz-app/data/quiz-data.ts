"use client"

import type { QuizDataStructure } from "@/types/quiz"

export const quizData: QuizDataStructure = {
  html: {
    semantic: {
      title: "HTML Semantic Elements",
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
            content: `<article>
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
      title: "HTML Forms",
      description: "Learn about HTML form elements and attributes",
      questions: [
        {
          question: "In the form above, which input type is used for email validation?",
          options: ['type="mail"', 'type="email"', 'type="e-mail"', 'type="validate"'],
          correctAnswer: 1,
          level: "easy",
          code: {
            language: "html",
            content: `<form>
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
      title: "CSS Grid Layout",
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
            content: `.container {
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
      title: "CSS Flexbox",
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
            content: `.flex-container {
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
      title: "JavaScript Promises",
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
            content: `console.log("Loading...");

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
      title: "JavaScript Arrays",
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
            content: `const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .map(num => num * 2)
  .filter(num => num <= 10);

console.log(result);`,
          },
        },
      ],
    },
  },
  react: {
    hooks: {
      title: "React Hooks",
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
          correctAnswer: 1,
          level: "medium",
          code: {
            language: "jsx",
            content: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
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
            content: `function Parent() {
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
