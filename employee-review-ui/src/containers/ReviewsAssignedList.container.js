import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { ROUTE_WRITE_REVIEW_VIEW, ROUTE_ROOT_VIEW } from "./../Routes";

import {
  getReviewsAssignedError,
  getReviewsAssigned,
  getReviewsAssignedPending
} from "../reducers/getReviewsAssigned.reducer";

import { getSession } from "../reducers/sessionReducer.reducer";

import { fetchReviewsAssigned as fetchReviewsAssignedAction } from "../services/reviews.service";
import { ReviewsAssignedListComponent } from "../components";

class ReviewsAssignedList extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
    this.navToWriteReview = this.navToWriteReview.bind(this);
  }

  componentWillMount() {
    const { fetchReviewsAssigned, email } = this.props;

    email
      ? fetchReviewsAssigned(email)
      : this.props.history.push(ROUTE_ROOT_VIEW);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === true) return false;
    // more tests
    return true;
  }

  navToWriteReview(id, revieweeName) {
    this.props.history.push(ROUTE_WRITE_REVIEW_VIEW, {
      id,
      revieweeName
    });
  }

  render() {
    const { reviews, error } = this.props;

    if (!this.shouldComponentRender()) return <span>Loading...</span>;

    return (
      <div className="reviews-list-wrapper">
        {error && <span className="reviews-list-error red">{error}</span>}
        <ReviewsAssignedListComponent
          reviews={reviews}
          onWrite={this.navToWriteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getReviewsAssignedError(state),
  reviews: getReviewsAssigned(state),
  pending: getReviewsAssignedPending(state),
  session: getSession(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchReviewsAssigned: fetchReviewsAssignedAction
    },
    dispatch
  );

const ReviewsAssignedListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsAssignedList);

export default withRouter(ReviewsAssignedListContainer);
