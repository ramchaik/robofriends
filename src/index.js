import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import CardList from "./components/CardList";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { robots } from "./robots";

ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
