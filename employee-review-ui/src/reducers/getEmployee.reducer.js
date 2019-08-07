import {
  GET_EMPLOYEE_PENDING,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR
} from "../actions/GetEmployee.actions";

const initialState = {
  pending: false,
  employee: {},
  error: null
};

export const getEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_PENDING:
      return {
        ...state,
        pending: true
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        employee: action.payload
      };
    case GET_EMPLOYEE_ERROR:
      return {
        ...state,
        pending: false,
        error: String(action.error)
      };
    default:
      return state;
  }
};

export const getEmployee = state => state.getEmployee.employee;
export const getEmployeePending = state => state.getEmployee.pending;
export const getEmployeeError = state => state.getEmployee.error;
