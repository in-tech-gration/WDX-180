import React from 'react' 
import ReactDOM from 'react-dom/client' 
import App from "./App.jsx";
import './index.css'

// const root = document.getElementById('root');
// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// EXERCISE: Twitter App Refactoring
import Twitter from "./modules/Twitter";
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Twitter />
  </React.StrictMode>
)

// My 2nd App:
// function ChatApp(){
//   return <h2>Chat App</h2>
// }
// const chatElement = document.getElementById("chat");
// console.log(chatElement);
// console.log(chat);
// const chatRoot = ReactDOM.createRoot(chatElement);
// chatRoot.render(<ChatApp />);
