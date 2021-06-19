import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import App from "./containers/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./reducers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({ searchRobots, requestRobots });

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
