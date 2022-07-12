import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Data = [
  { name: "Eat", complete: true, id: "todo-0" },
  { name: "Sleep", complete: false, id: "todo-0" },
  { name: "Repeat", complete: false, id: "todo-0" }
];
const taskType = ["all","active","complete"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={Data} types={taskType}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
