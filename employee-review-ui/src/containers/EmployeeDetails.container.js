import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { getIn } from "./../utils/helpers";
import { getEmployee as getEmployeeAction } from "./../services/employee.service";

import {
  getEmployeeError,
  getEmployee,
  getEmployeePending
} from "../reducers/getEmployee.reducer";

import { EmployeeDetailsComponent } from "./../components";
import { AddReview } from "./../containers";
import { ReviewsOfEmployee } from "./../containers";
import { ROUTE_ADMIN_VIEW } from "../Routes";

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { getEmployee } = this.props;
    const employeeId = getIn("location.state.employeeId", this.props);

    employeeId
      ? getEmployee(employeeId)
      : this.props.history.push(ROUTE_ADMIN_VIEW);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === true) return false;
    // more tests
    return true;
  }

  render() {
    const { employee, error } = this.props;

    if (!this.shouldComponentRender()) return <span>Loading...</span>;

    return (
      <div className="employee-details-wrapper">
        {error && <span className="employee-details-error red">{error}</span>}
        <EmployeeDetailsComponent
          title="Employee Details"
          employee={employee}
        />
        <br />
        <br />
        <br />
        <ReviewsOfEmployee employee={employee} />
        <br />
        <br />
        <br />
        <AddReview employee={employee} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getEmployeeError(state),
  employee: getEmployee(state),
  pending: getEmployeePending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getEmployee: getEmployeeAction
    },
    dispatch
  );

const EmployeeDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeDetails);

export default withRouter(EmployeeDetailsContainer);
