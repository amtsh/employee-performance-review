import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import {
  getReviewsOfEmployeeError,
  getReviewsOfEmployee,
  getReviewsOfEmployeePending
} from "../reducers/getReviewsOfEmployee.reducer";

import { ReviewsListComponent } from "../components";
import { fetchReviewsOfEmployee as fetchReviewsOfEmployeeAction } from "../services/reviews.service";

class ReviewsOfEmployee extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { employee, fetchReviewsOfEmployee } = this.props;
    if (employee.email) {
      fetchReviewsOfEmployee(employee.email);
    }
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === true) return false;
    // more tests
    return true;
  }

  render() {
    const { reviews, error, employee } = this.props;

    if (!this.shouldComponentRender()) return <span>Loading...</span>;

    return (
      <div className="reviews-list-wrapper">
        {error && <span className="reviews-list-error red">{error}</span>}
        <ReviewsListComponent
          title={`Performance review of ${employee.fullname}`}
          reviews={reviews}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getReviewsOfEmployeeError(state),
  reviews: getReviewsOfEmployee(state),
  pending: getReviewsOfEmployeePending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchReviewsOfEmployee: fetchReviewsOfEmployeeAction
    },
    dispatch
  );

const ReviewsOfEmployeeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsOfEmployee);

export default withRouter(ReviewsOfEmployeeContainer);
