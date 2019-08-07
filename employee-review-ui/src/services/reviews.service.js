import {
  addReviewPending,
  addReviewSuccess,
  addReviewError
} from "../actions/AddReview.actions";

import {
  updateReviewPending,
  updateReviewSuccess,
  updateReviewError
} from "../actions/UpdateReview.actions";

import {
  fetchReviewsPending,
  fetchReviewsSuccess,
  fetchReviewsError
} from "../actions/Reviews.actions";

import {
  fetchReviewsOfEmployeePending,
  fetchReviewsOfEmployeeSuccess,
  fetchReviewsOfEmployeeError
} from "../actions/ReviewsOfEmployee.actions";

import {
  fetchReviewsAssignedPending,
  fetchReviewsAssignedSuccess,
  fetchReviewsAssignedError
} from "../actions/ReviewsAssignedList.actions";

import http from "./Http.service";

const API_URL = "https://applause-review.herokuapp.com/api";
const API_VERSION = "/v1";
const REVIEWS = "/reviews";
const REVIEWS_URL = API_URL + API_VERSION + REVIEWS;

export const fetchAllReviews = () => {
  return dispatch => {
    dispatch(fetchReviewsPending());

    http
      .get(REVIEWS_URL)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchReviewsSuccess(res.rows));
        return res.rows;
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchReviewsError("FAILED TO GET REVIEWS LIST"));
      });
  };
};

export const addReview = (revieweeEmail, reviewers = []) => {
  return dispatch => {
    dispatch(addReviewPending());

    reviewers.map(reviewer => {
      const review = {
        review_for_email: revieweeEmail,
        reviewer_email: reviewer,
        review_text: "",
        is_complete: "false"
      };

      addReviewRequest(review, dispatch);
    });
  };
};

const addReviewRequest = (review, dispatch) => {
  http
    .post(REVIEWS_URL, review)
    .then(res => (res ? res.json() : null))
    .then(res => {
      if (res.error) {
        throw res.error;
      }

      dispatch(addReviewSuccess("SUCCESS"));
      return res;
    })
    .catch(error => {
      console.log(error);
      dispatch(addReviewError(`FAILED TO ADD REVIEWER`));
    });
};

export const updateReview = (reviewId, reviewText) => {
  return dispatch => {
    dispatch(updateReviewPending());

    const review = {
      review_text: reviewText,
      is_complete: "true"
    };

    http
      .put(REVIEWS_URL + `/${reviewId}`, review)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(updateReviewSuccess(res));
        return res;
      })
      .catch(error => {
        console.log(error);
        dispatch(updateReviewError(`FAILED TO UPDATE REVIEW`));
      });
  };
};

export const fetchReviewsOfEmployee = employeeEmail => {
  return dispatch => {
    dispatch(fetchReviewsOfEmployeePending());
    http
      .get(REVIEWS_URL + `?q_reviewee=${employeeEmail}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchReviewsOfEmployeeSuccess(res.rows));
        return res.rows;
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchReviewsOfEmployeeError("FAILED TO GET REVIEWS LIST"));
      });
  };
};

export const fetchReviewsAssigned = employeeEmail => {
  return dispatch => {
    dispatch(fetchReviewsAssignedPending());
    http
      .get(REVIEWS_URL + `?q_reviewer=${employeeEmail}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchReviewsAssignedSuccess(res.rows));
        return res.rows;
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchReviewsAssignedError("FAILED TO GET REVIEWS LIST"));
      });
  };
};
