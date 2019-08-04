import React from "react";
import { Button } from "antd";
import EmployeeList from "./../components/EmployeeList";
import ReviewRequestList from "./../components/ReviewRequestList";
import ReviewList from "./../components/ReviewList";
import EmployeeForm from "./../components/EmployeeForm";
import ReviewForm from "./../components/ReviewForm";
import "./../App.css";
import { Link } from "react-router-dom";

function AdminView() {
  const handleAdd = () => {};

  return (
    <div>
      <div className="Actions-bar">
        <Link to="/review">
          <Button onClick={handleAdd} type="primary" style={{ marginLeft: 10 }}>
            Create Review
          </Button>
        </Link>

        <Link to="/employee">
          <Button
            onClick={handleAdd}
            type="secondary"
            style={{ marginLeft: 10 }}
          >
            Add Employee
          </Button>
        </Link>
      </div>
      <EmployeeList />
      <EmployeeForm />
      <ReviewList />
      <ReviewForm />

      <ReviewRequestList />
    </div>
  );
}

export default AdminView;
