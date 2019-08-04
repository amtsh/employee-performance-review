import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin">Admin View</Link>
        </li>
        <li>
          <Link to="/employee">Employee View</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
