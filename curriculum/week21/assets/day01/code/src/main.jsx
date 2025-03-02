import React from 'react' // Loading the Core React library
import ReactDOM from 'react-dom/client' // Loading ReactDOM for displaying components in the DOM
import App from './App.jsx'
import './index.css'
// import "./styles/debug.css";

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
