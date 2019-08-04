const FETCH_EMPLOYEES_PENDING = "FETCH_EMPLOYEES_PENDING";
const FETCH_EMPLOYEES_SUCCESS = "FETCH_EMPLOYEES_SUCCESS";
const FETCH_EMPLOYEES_ERROR = "FETCH_EMPLOYEES_ERROR";
const ADD_EMPLOYEE_TO_LIST = "ADD_EMPLOYEE_TO_LIST";
const REMOVE_EMPLOYEE_FROM_LIST = "REMOVE_EMPLOYEE_TO_LIST";

function fetchEmployeesPending() {
  return {
    type: FETCH_EMPLOYEES_PENDING
  };
}

function fetchEmployeesSuccess(employees) {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees
  };
}

function fetchEmployeesError(error) {
  return {
    type: FETCH_EMPLOYEES_ERROR,
    error: error
  };
}

function addEmployeeToList(employee) {
  return {
    type: ADD_EMPLOYEE_TO_LIST,
    payload: employee
  };
}

function removeEmployeeFromList(employeeId) {
  return {
    type: REMOVE_EMPLOYEE_FROM_LIST,
    payload: employeeId
  };
}

export {
  FETCH_EMPLOYEES_PENDING,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR,
  ADD_EMPLOYEE_TO_LIST,
  REMOVE_EMPLOYEE_FROM_LIST,
  fetchEmployeesPending,
  fetchEmployeesSuccess,
  fetchEmployeesError,
  addEmployeeToList,
  removeEmployeeFromList
};
