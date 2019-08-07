import { combineReducers } from "redux";
import { employeesReducer } from "./employees.reducer";
import { addEmployeeReducer } from "./addEmployee.reducer";
import { getEmployeeReducer } from "./getEmployee.reducer";
import { addReviewReducer } from "./addReview.reducer";
import { updateReviewReducer } from "./updateReview.reducer";
import { reviewsReducer } from "./reviews.reducer";
import { getReviewsOfEmployeeReducer } from "./getReviewsOfEmployee.reducer";
import { getReviewsAssignedReducer } from "./getReviewsAssigned.reducer";
import { sessionReducer } from "./sessionReducer.reducer";

export default combineReducers({
  employeesList: employeesReducer,
  addEmployee: addEmployeeReducer,
  getEmployee: getEmployeeReducer,
  addReview: addReviewReducer,
  updateReview: updateReviewReducer,
  reviewsList: reviewsReducer,
  reviewsOfEmployee: getReviewsOfEmployeeReducer,
  reviewsAssignedList: getReviewsAssignedReducer,
  session: sessionReducer
});
