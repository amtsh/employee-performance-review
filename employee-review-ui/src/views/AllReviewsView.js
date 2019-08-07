import React from "react";
import "./../App.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AllReviewsList } from "../containers";
import { ROUTE_ADMIN_VIEW } from "./../Routes";

const AllReviewsView = props => {
  return (
    <div>
      <div className="Actions-bar">
        <Link to={`${ROUTE_ADMIN_VIEW}`}>
          <Button type="secondary" style={{ marginLeft: 10 }}>
            Employees List
          </Button>
        </Link>
      </div>

      <AllReviewsList />
    </div>
  );
};

export default AllReviewsView;
