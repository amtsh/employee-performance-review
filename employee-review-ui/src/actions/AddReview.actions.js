const ADD_REVIEW_PENDING = "ADD_REVIEW_PENDING";
const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
const ADD_REVIEW_ERROR = "ADD_REVIEW_ERROR";

function addReviewPending() {
  return {
    type: ADD_REVIEW_PENDING
  };
}

function addReviewSuccess(status) {
  return {
    type: ADD_REVIEW_SUCCESS,
    payload: status
  };
}

function addReviewError(error) {
  return {
    type: ADD_REVIEW_ERROR,
    error: error
  };
}

export {
  ADD_REVIEW_PENDING,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_ERROR,
  addReviewPending,
  addReviewSuccess,
  addReviewError
};
