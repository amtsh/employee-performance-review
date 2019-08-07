const GET_EMPLOYEE_PENDING = "GET_EMPLOYEE_PENDING";
const GET_EMPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";
const GET_EMPLOYEE_ERROR = "GET_EMPLOYEE_ERROR";

function getEmployeePending() {
  return {
    type: GET_EMPLOYEE_PENDING
  };
}

function getEmployeeSuccess(employees) {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    payload: employees
  };
}

function getEmployeeError(error) {
  return {
    type: GET_EMPLOYEE_ERROR,
    error: error
  };
}

export {
  GET_EMPLOYEE_PENDING,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR,
  getEmployeePending,
  getEmployeeSuccess,
  getEmployeeError
};
