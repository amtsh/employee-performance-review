import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchEmployees as fetchEmployeesAction,
  removeEmployee as removeEmployeeAction
} from "./../services/employee.service";

import {
  getEmployeesError,
  getEmployees,
  getEmployeesPending
} from "../reducers/employees.reducer";

import EmployeesListComponent from "./../components/EmployeeList.component";

class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchEmployees } = this.props;
    fetchEmployees();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === true) return false;
    // more tests
    return true;
  }

  render() {
    const { employees, error, removeEmployee } = this.props;

    if (!this.shouldComponentRender()) return <span>Loading...</span>;

    return (
      <div className="employee-list-wrapper">
        {error && <span className="employee-list-error red">{error}</span>}
        <EmployeesListComponent
          employees={employees}
          onDelete={removeEmployee}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getEmployeesError(state),
  employees: getEmployees(state),
  pending: getEmployeesPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchEmployees: fetchEmployeesAction,
      removeEmployee: removeEmployeeAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);
