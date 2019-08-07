const UPDATE_REVIEW_PENDING = "UPDATE_REVIEW_PENDING";
const UPDATE_REVIEW_SUCCESS = "UPDATE_REVIEW_SUCCESS";
const UPDATE_REVIEW_ERROR = "UPDATE_REVIEW_ERROR";

function updateReviewPending() {
  return {
    type: UPDATE_REVIEW_PENDING
  };
}

function updateReviewSuccess(status) {
  return {
    type: UPDATE_REVIEW_SUCCESS,
    payload: status
  };
}

function updateReviewError(error) {
  return {
    type: UPDATE_REVIEW_ERROR,
    error: error
  };
}

export {
  UPDATE_REVIEW_PENDING,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_ERROR,
  updateReviewPending,
  updateReviewSuccess,
  updateReviewError
};
