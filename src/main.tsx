import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./index.css";
import "./assets/css/style.css"
import "./assets/css/responsive.css"

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root container missing");
}
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);