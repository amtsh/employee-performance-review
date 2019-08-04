import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getAddEmployeeError,
  getAddEmployee,
  getAddEmployeePending
} from "../reducers/addEmployee.reducer";
import { addEmployee as addEmployeeAction } from "./../services/employee.service";
import AddEmployeeForm from "../components/AddEmployeeForm";

const mapStateToProps = state => ({
  error: getAddEmployeeError(state),
  employee: getAddEmployee(state),
  pending: getAddEmployeePending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addEmployee: addEmployeeAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEmployeeForm);
