import React from "react";
import { Button } from "antd";
import EmployeesList from "../containers/EmployeesList.container";
import ReviewRequestList from "./../components/ReviewRequestList";
import AddEmployeeForm from "./../containers/AddEmployee.container";
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

      <EmployeesList />
      <ReviewRequestList />
      <AddEmployeeForm />
      <ReviewForm />
    </div>
  );
}

export default AdminView;
