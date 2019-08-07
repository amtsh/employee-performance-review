const FETCH_REVIEWS_PENDING = "FETCH_REVIEWS_PENDING";
const FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS";
const FETCH_REVIEWS_ERROR = "FETCH_REVIEWS_ERROR";

function fetchReviewsPending() {
  return {
    type: FETCH_REVIEWS_PENDING
  };
}

function fetchReviewsSuccess(reviews) {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    payload: reviews
  };
}

function fetchReviewsError(error) {
  return {
    type: FETCH_REVIEWS_ERROR,
    error: error
  };
}

export {
  FETCH_REVIEWS_PENDING,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_ERROR,
  fetchReviewsPending,
  fetchReviewsSuccess,
  fetchReviewsError
};
