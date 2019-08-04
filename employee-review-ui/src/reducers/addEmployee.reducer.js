import {
  ADD_EMPLOYEE_PENDING,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR
} from "../actions/AddEmployee.actions";

const initialState = {
  pending: false,
  employee: {},
  error: null
};

export const addEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_PENDING:
      return {
        ...state,
        pending: true
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        employee: action.payload
      };
    case ADD_EMPLOYEE_ERROR:
      return {
        ...state,
        pending: false,
        error: String(action.error)
      };
    default:
      return state;
  }
};

export const getAddEmployee = state => state.addEmployee.employee;
export const getAddEmployeePending = state => state.addEmployee.pending;
export const getAddEmployeeError = state => state.addEmployee.error;
