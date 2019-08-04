import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import AdminView from "./views/AdminView";
import AppHeader from "./components/AppHeader";

const routing = (
  <Router>
    <div className="App container">
      <AppHeader />
      <Route path="/" exact component={App} />
      <Route path="/admin" component={AdminView} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
