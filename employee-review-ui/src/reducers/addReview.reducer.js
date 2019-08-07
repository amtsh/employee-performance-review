import {
  ADD_REVIEW_PENDING,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_ERROR
} from "../actions/AddReview.actions";

const initialState = {
  pending: false,
  status: "",
  error: null
};

export const addReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW_PENDING:
      return {
        ...state,
        pending: true
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        pending: false,
        status: action.payload
      };
    case ADD_REVIEW_ERROR:
      return {
        ...state,
        pending: false,
        error: String(action.error)
      };
    default:
      return state;
  }
};

export const getAddReview = state => state.addReview.status;
export const getAddReviewPending = state => state.addReview.pending;
export const getAddReviewError = state => state.addReview.error;
