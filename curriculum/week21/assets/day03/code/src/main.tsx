// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import './index.css';
import Hello from './components/Hello.jsx';

const root = document.getElementById('root');

// Can we pass an object as a prop value?
// Can we use map to map over prop values?
// We can also destructure props:
function Experiment(props) {
  // 1) props.data => Array
  // 2) We can get array entries using the [index] notation
  return (
    <div>
      <h1>Lab</h1>
      <p>Firstname: {props.data[0]}</p>
      <p>Lastname: {props.data[1]}</p>
      <p>Language: {props.data[2]}</p>
    </div>
  );
}
const list = ['Brendan ', 'Eich ', 'JavaScript']; // => 'BrendanEichJavaScript'

// PRACTICE: Find Vimeo videos (that are not rated, no need to login)
// Example: https://vimeo.com/123800085
// Create: <Vimeo vid="123800085" />

// !!! RULE: HTML Attributes that are made up of 2 words or more, should be converted
// to camelCase: frameborder => frameBorder, allowfullscreen => allowFullScreen
// Template literals or `backticks`, `String and ${value}`
function YouTube(props) {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        // src="https://www.youtube.com/embed/${vid}"
        src={'https://www.youtube.com/embed/' + props.vid}
        // src={`https://www.youtube.com/embed/${props.vid}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function Channel() {
  return (
    <div>
      <h1>Intechgration Recommended Videos</h1>
      <YouTube vid="x5trGVMKTdY" />
      <YouTube vid="3xaVX0cluDo" />
      <YouTube vid="ZN7X3wD0-jg" />
      {/* <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x5trGVMKTdY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3xaVX0cluDo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZN7X3wD0-jg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> */}
    </div>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </article>
  );
}

function Main() {
  return (
    <main>
      <h1>Hello World</h1>
      <Article title="Learn React" text="Lorem ipsum" />
      <Article title="Learn JS" text="Let's talk async..." />
    </main>
  );
}

function Article2(props) {
  return React.createElement(
    'article',
    {},
    React.createElement('h2', {}, props.title),
    React.createElement('p', {}, props.text)
  );
}

// https://react.dev/reference/react/createElement
function MainOld() {
  return React.createElement(
    'main',
    null,
    React.createElement('h1', null, 'Hello World'),
    React.createElement(Article2, {
      title: 'Learn React',
      text: 'Lorem ipsum',
    }),
    React.createElement(Article2, {
      title: 'Learn JS',
      text: "Let's talk async...",
    })
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <Experiment data={list} />
  // <App />
  // <Channel />
  // </React.StrictMode>
  <MainOld />
  // <Main />
);

// Direct value:
// ReactDOM.createRoot(root).render(<div>Hello world!</div>);
// Function that returns the value (indirect)
// ReactDOM.createRoot(root).render(Hello());
// Special JSX syntax that calls the function based on the Component name:
// ReactDOM.createRoot(root).render(<Hello />);
// <Hello /> => Hello() => <div>Hello world!</div>
