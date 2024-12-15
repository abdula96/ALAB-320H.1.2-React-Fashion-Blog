import React from "react";
import ReactDOM from "react-dom/client"; // If using React 18+; For older versions, it's just 'react-dom'
import "./style.css"; // Import your styles (if you have any global styles)
import App from "./App"; // Import your App component

const root = ReactDOM.createRoot(document.getElementById("root")); // Create the root element in the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
