import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <>
    <div className="header" style={{ textAlign: "center" }}>
      <a href="./">QUIZ APP</a>
    </div>
    <App />
  </>,

  document.getElementById("root")
);
serviceWorker.register();
