import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import Card from "./components/Card";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { robots } from "./robots";

ReactDOM.render(
  <React.StrictMode>
    <Card robot={robots[0]} />
    <Card robot={robots[1]} />
    <Card robot={robots[2]} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
