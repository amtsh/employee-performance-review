import {
  UPDATE_REVIEW_PENDING,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_ERROR
} from "../actions/UpdateReview.actions";

const initialState = {
  pending: false,
  status: "",
  error: null
};

export const updateReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REVIEW_PENDING:
      return {
        ...state,
        pending: true
      };
    case UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
        pending: false,
        status: action.payload
      };
    case UPDATE_REVIEW_ERROR:
      return {
        ...state,
        pending: false,
        error: String(action.error)
      };
    default:
      return state;
  }
};

export const getUpdateReview = state => state.updateReview.status;
export const getUpdateReviewPending = state => state.updateReview.pending;
export const getUpdateReviewError = state => state.updateReview.error;
