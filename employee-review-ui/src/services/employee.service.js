import {
  fetchEmployeesPending,
  fetchEmployeesSuccess,
  fetchEmployeesError,
  addEmployeeToList,
  removeEmployeeFromList
} from "../actions/Employees.actions";
import {
  addEmployeePending,
  addEmployeeSuccess,
  addEmployeeError
} from "../actions/AddEmployee.actions";

import http from "./Http.service";

const API_URL = "http://localhost:9000/api";
const API_VERSION = "/v1";
const EMPLOYEES = "/employees";
const EMPLOYEES_URL = API_URL + API_VERSION + EMPLOYEES;

export const fetchEmployees = () => {
  return dispatch => {
    dispatch(fetchEmployeesPending());

    http
      .get(EMPLOYEES_URL)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchEmployeesSuccess(res.rows));
        return res.rows;
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchEmployeesError("FAILED TO GET LIST"));
      });
  };
};

export const addEmployee = employee => {
  return dispatch => {
    dispatch(addEmployeePending());

    http
      .post(EMPLOYEES_URL, employee)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(addEmployeeSuccess(res));
        dispatch(addEmployeeToList(res));
        return res;
      })
      .catch(error => {
        console.log(error);
        dispatch(addEmployeeError("FAILED TO ADD EMPLOYEE"));
      });
  };
};

export const removeEmployee = employeeId => {
  return dispatch => {
    http
      ._delete(EMPLOYEES_URL + `/${employeeId}`)
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(removeEmployeeFromList(employeeId));
        return res;
      })
      .catch(error => {
        console.log(error);
      });
  };
};
