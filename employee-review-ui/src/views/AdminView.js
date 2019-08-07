import React from "react";
import { Button } from "antd";
import "./../App.css";
import { Link } from "react-router-dom";
import { EmployeesList, AddEmployee } from "../containers";
import { ROUTE_ALL_REVIEWS_VIEW } from "./../Routes";

function AdminView() {
  return (
    <div>
      <div className="Actions-bar">
        <Link to={`${ROUTE_ALL_REVIEWS_VIEW}`}>
          <Button type="primary" style={{ marginLeft: 10 }}>
            See All Reviews
          </Button>
        </Link>
      </div>

      <EmployeesList />
      <br />
      <br />
      <br />
      <AddEmployee />
    </div>
  );
}

export default AdminView;
