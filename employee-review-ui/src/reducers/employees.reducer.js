import {
  FETCH_EMPLOYEES_PENDING,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR,
  ADD_EMPLOYEE_TO_LIST,
  REMOVE_EMPLOYEE_FROM_LIST
} from "../actions/Employees.actions";

const initialState = {
  pending: false,
  employees: [],
  error: null
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        pending: false,
        employees: action.payload
      };
    case FETCH_EMPLOYEES_ERROR:
      return {
        ...state,
        pending: false,
        error: String(action.error)
      };
    case ADD_EMPLOYEE_TO_LIST:
      return {
        ...state,
        employees: [action.payload, ...state.employees]
      };
    case REMOVE_EMPLOYEE_FROM_LIST:
      return {
        ...state,
        employees: state.employees.filter(e => e.id !== action.payload)
      };
    default:
      return state;
  }
};

export const getEmployees = state => state.employeesList.employees;
export const getEmployeesPending = state => state.employeesList.pending;
export const getEmployeesError = state => state.employeesList.error;
