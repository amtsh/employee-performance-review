import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getAddReviewPending,
  getAddReview,
  getAddReviewError
} from "../reducers/addReview.reducer";
import { AddReviewFormComponent } from "../components";
import { addReview as addReviewAction } from "./../services/reviews.service";

class AddReview extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === true) return false;
    // more tests
    return true;
  }

  render() {
    const { employee, error, status, addReview } = this.props;

    if (!this.shouldComponentRender()) return <span>Loading...</span>;

    return (
      <div className="add-review-wrapper">
        {error && <span className="add-review-error red">{error}</span>}

        {!error && status === "SUCCESS" && (
          <span className="add-review-error green">REVIEW REQUESTED</span>
        )}

        <AddReviewFormComponent
          title={`Add reviewers for ${employee.fullname}`}
          forEmail={`${employee.email}`}
          onReviewersSubmit={addReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pending: getAddReviewPending(state),
  status: getAddReview(state),
  error: getAddReviewError(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addReview: addReviewAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReview);
