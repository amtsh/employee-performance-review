import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { getIn } from "./../utils/helpers";
import { updateReview as updateReviewAction } from "./../services/reviews.service";

import {
  getUpdateReviewError,
  getUpdateReview,
  getUpdateReviewPending
} from "../reducers/updateReview.reducer";

import { WriteReviewComponent } from "./../components";
import { ROUTE_ROOT_VIEW } from "../Routes";

class WriteReview extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const reviewId = getIn("location.state.id", this.props);

    if (!reviewId) {
      this.props.history.push(ROUTE_ROOT_VIEW);
    }
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === true) return false;
    // more tests
    return true;
  }

  render() {
    const reviewId = getIn("location.state.id", this.props);
    const revieweeName = getIn("location.state.revieweeName", this.props);

    const { updateReview, error } = this.props;

    if (!this.shouldComponentRender()) return <span>Loading...</span>;

    return (
      <div className="update-review-wrapper">
        {error && <span className="update-review-error red">{error}</span>}
        <WriteReviewComponent
          review={{ reviewId: reviewId, revieweeName: revieweeName }}
          onReviewSubmit={updateReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getUpdateReviewError(state),
  status: getUpdateReview(state),
  pending: getUpdateReviewPending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateReview: updateReviewAction
    },
    dispatch
  );

const WriteReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteReview);

export default withRouter(WriteReviewContainer);
