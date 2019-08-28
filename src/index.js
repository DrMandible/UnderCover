import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

function MainApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MainApp />, rootElement);
