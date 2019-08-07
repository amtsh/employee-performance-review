import {
  FETCH_REVIEWS_OF_EMPLOYEE_PENDING,
  FETCH_REVIEWS_OF_EMPLOYEE_SUCCESS,
  FETCH_REVIEWS_OF_EMPLOYEE_ERROR
} from "../actions/ReviewsOfEmployee.actions";

const initialState = {
  pending: false,
  reviews: [],
  error: null
};

export const getReviewsOfEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_OF_EMPLOYEE_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_REVIEWS_OF_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        pending: false,
        reviews: action.payload
      };
    }
    case FETCH_REVIEWS_OF_EMPLOYEE_ERROR:
      return {
        ...state,
        pending: false,
        error: String(action.error)
      };
    default:
      return state;
  }
};

export const getReviewsOfEmployee = state => state.reviewsOfEmployee.reviews;
export const getReviewsOfEmployeePending = state =>
  state.reviewsOfEmployee.pending;
export const getReviewsOfEmployeeError = state => state.reviewsOfEmployee.error;
