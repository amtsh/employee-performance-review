const FETCH_REVIEWS_ASSIGNED_PENDING = "FETCH_REVIEWS_ASSIGNED_PENDING";
const FETCH_REVIEWS_ASSIGNED_SUCCESS = "FETCH_REVIEWS_ASSIGNED_SUCCESS";
const FETCH_REVIEWS_ASSIGNED_ERROR = "FETCH_REVIEWS_ASSIGNED_ERROR";

function fetchReviewsAssignedPending() {
  return {
    type: FETCH_REVIEWS_ASSIGNED_PENDING
  };
}

function fetchReviewsAssignedSuccess(reviews) {
  return {
    type: FETCH_REVIEWS_ASSIGNED_SUCCESS,
    payload: reviews
  };
}

function fetchReviewsAssignedError(error) {
  return {
    type: FETCH_REVIEWS_ASSIGNED_ERROR,
    error: error
  };
}

export {
  FETCH_REVIEWS_ASSIGNED_PENDING,
  FETCH_REVIEWS_ASSIGNED_SUCCESS,
  FETCH_REVIEWS_ASSIGNED_ERROR,
  fetchReviewsAssignedPending,
  fetchReviewsAssignedSuccess,
  fetchReviewsAssignedError
};
