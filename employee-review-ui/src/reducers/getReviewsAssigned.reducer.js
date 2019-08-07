import {
  FETCH_REVIEWS_ASSIGNED_PENDING,
  FETCH_REVIEWS_ASSIGNED_SUCCESS,
  FETCH_REVIEWS_ASSIGNED_ERROR
} from "../actions/ReviewsAssignedList.actions";

const initialState = {
  pending: false,
  reviews: [],
  error: null
};

export const getReviewsAssignedReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_ASSIGNED_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_REVIEWS_ASSIGNED_SUCCESS: {
      return {
        ...state,
        pending: false,
        reviews: action.payload
      };
    }
    case FETCH_REVIEWS_ASSIGNED_ERROR:
      return {
        ...state,
        pending: false,
        error: String(action.error)
      };
    default:
      return state;
  }
};

export const getReviewsAssigned = state => state.reviewsAssignedList.reviews;
export const getReviewsAssignedPending = state =>
  state.reviewsAssignedList.pending;
export const getReviewsAssignedError = state => state.reviewsAssignedList.error;
