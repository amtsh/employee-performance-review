import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { fetchAllReviews as fetchAllReviewsAction } from "../services/reviews.service";

import {
  getReviewsError,
  getReviews,
  getReviewsPending
} from "../reducers/reviews.reducer";

import { AllReviewsListComponent } from "../components";

class ReviewRequestList extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchAllReviews } = this.props;
    fetchAllReviews();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === true) return false;
    // more tests
    return true;
  }

  render() {
    const { reviews, error } = this.props;

    if (!this.shouldComponentRender()) return <span>Loading...</span>;

    return (
      <div className="review-list-wrapper">
        {error && <span className="review-list-error red">{error}</span>}
        <AllReviewsListComponent reviews={reviews} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getReviewsError(state),
  reviews: getReviews(state),
  pending: getReviewsPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllReviews: fetchAllReviewsAction
    },
    dispatch
  );

const AllReviewsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewRequestList);

export default withRouter(AllReviewsListContainer);
