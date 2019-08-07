import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { ROUTE_EMPLOYEE_DETAILS_VIEW } from "./../Routes";

import {
  fetchEmployees as fetchEmployeesAction,
  removeEmployee as removeEmployeeAction
} from "./../services/employee.service";

import {
  getEmployeesError,
  getEmployees,
  getEmployeesPending
} from "../reducers/employees.reducer";

import { EmployeeListComponent } from "./../components";

class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
    this.navToEmployeeDetails = this.navToEmployeeDetails.bind(this);
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

  navToEmployeeDetails(payload) {
    this.props.history.push(ROUTE_EMPLOYEE_DETAILS_VIEW, payload);
  }

  render() {
    const { employees, error, removeEmployee } = this.props;

    if (!this.shouldComponentRender()) return <span>Loading...</span>;

    return (
      <div className="employee-list-wrapper">
        {error && <span className="employee-list-error red">{error}</span>}
        <EmployeeListComponent
          employees={employees}
          onDelete={removeEmployee}
          onView={this.navToEmployeeDetails}
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

const EmployeeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);

export default withRouter(EmployeeListContainer);
