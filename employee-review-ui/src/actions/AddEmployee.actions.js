const ADD_EMPLOYEE_PENDING = "ADD_EMPLOYEE_PENDING";
const ADD_EMPLOYEE_SUCCESS = "ADD_EMPLOYEE_SUCCESS";
const ADD_EMPLOYEE_ERROR = "ADD_EMPLOYEE_ERROR";

function addEmployeePending() {
  return {
    type: ADD_EMPLOYEE_PENDING
  };
}

function addEmployeeSuccess(employee) {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    payload: employee
  };
}

function addEmployeeError(error) {
  return {
    type: ADD_EMPLOYEE_ERROR,
    error: error
  };
}

export {
  ADD_EMPLOYEE_PENDING,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
  addEmployeePending,
  addEmployeeSuccess,
  addEmployeeError
};
