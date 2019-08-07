import React from "react";
import "./App.css";
import { Layout } from "antd";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AppHeader from "./components/AppHeader.component";
import { AdminView, HomeView, AllReviewsView, LoginView } from "./views";
import { EmployeeDetails, WriteReview } from "./containers";
import {
  ROUTE_ROOT_VIEW,
  ROUTE_HOME_VIEW,
  ROUTE_ADMIN_VIEW,
  ROUTE_EMPLOYEE_DETAILS_VIEW,
  ROUTE_ALL_REVIEWS_VIEW,
  ROUTE_WRITE_REVIEW_VIEW
} from "./Routes";

const { Footer } = Layout;

function App() {
  return (
    <Router>
      <AppHeader />
      <div className="App container">
        <div className="App-content">
          <Route path={`${ROUTE_ROOT_VIEW}`} exact component={LoginView} />
          <Route path={`${ROUTE_HOME_VIEW}`} component={HomeView} />
          <Route path={`${ROUTE_ADMIN_VIEW}`} exact component={AdminView} />
          <Route
            path={`${ROUTE_EMPLOYEE_DETAILS_VIEW}`}
            component={EmployeeDetails}
          />
          <Route
            path={`${ROUTE_ALL_REVIEWS_VIEW}`}
            component={AllReviewsView}
          />
          <Route path={`${ROUTE_WRITE_REVIEW_VIEW}`} component={WriteReview} />
        </div>
      </div>
      <br />
      <Footer>Copyright Applause Inc. 2019</Footer>
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
