import { combineReducers } from "redux";
import { employeesReducer } from "./employees.reducer";
import { addEmployeeReducer } from "./addEmployee.reducer";

export default combineReducers({
  employeesList: employeesReducer,
  addEmployee: addEmployeeReducer
});
