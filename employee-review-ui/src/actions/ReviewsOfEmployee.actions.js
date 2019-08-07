const FETCH_REVIEWS_OF_EMPLOYEE_PENDING = "FETCH_REVIEWS_OF_EMPLOYEE_PENDING";
const FETCH_REVIEWS_OF_EMPLOYEE_SUCCESS = "FETCH_REVIEWS_OF_EMPLOYEE_SUCCESS";
const FETCH_REVIEWS_OF_EMPLOYEE_ERROR = "FETCH_REVIEWS_OF_EMPLOYEE_ERROR";

function fetchReviewsOfEmployeePending() {
  return {
    type: FETCH_REVIEWS_OF_EMPLOYEE_PENDING
  };
}

function fetchReviewsOfEmployeeSuccess(reviews) {
  return {
    type: FETCH_REVIEWS_OF_EMPLOYEE_SUCCESS,
    payload: reviews
  };
}

function fetchReviewsOfEmployeeError(error) {
  return {
    type: FETCH_REVIEWS_OF_EMPLOYEE_ERROR,
    error: error
  };
}

export {
  FETCH_REVIEWS_OF_EMPLOYEE_PENDING,
  FETCH_REVIEWS_OF_EMPLOYEE_SUCCESS,
  FETCH_REVIEWS_OF_EMPLOYEE_ERROR,
  fetchReviewsOfEmployeePending,
  fetchReviewsOfEmployeeSuccess,
  fetchReviewsOfEmployeeError
};
