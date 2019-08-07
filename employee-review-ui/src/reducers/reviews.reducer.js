import {
  FETCH_REVIEWS_PENDING,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_ERROR
} from "../actions/Reviews.actions";

const initialState = {
  pending: false,
  reviews: [],
  error: null
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        pending: false,
        reviews: action.payload
      };
    case FETCH_REVIEWS_ERROR:
      return {
        ...state,
        pending: false,
        error: String(action.error)
      };
    default:
      return state;
  }
};

export const getReviews = state => state.reviewsList.reviews;
export const getReviewsPending = state => state.reviewsList.pending;
export const getReviewsError = state => state.reviewsList.error;
