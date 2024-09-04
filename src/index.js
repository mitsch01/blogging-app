import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/lora"
import "@fontsource/source-sans-3"; // Defaults to weight 400
import "@fontsource/source-sans-3/400.css"; // Import specific weight
import "@fontsource/source-sans-3/700.css"; // Import bold weight
import "@fontsource/source-sans-3/900.css"; // Import black weight
import "@fontsource/pacifico"
import "./index.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
