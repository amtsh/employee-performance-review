import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import "./App.css";
import App from "./App";
import rootReducer from "./reducers";

import * as serviceWorker from "./serviceWorker";

const middlewares = [thunk];
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
