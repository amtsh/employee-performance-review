import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AdminView from "./views/AdminView";

function App() {
  return (
    <Router>
      <div className="App container">
        <AppHeader />
        <Route path="/" exact component={App} />
        <Route path="/admin" component={AdminView} />
      </div>
    </Router>
    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/admin">Admin View</Link>
    //     </li>
    //     <li>
    //       <Link to="/employee">Employee View</Link>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default App;
