import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { AddEmployeeFormComponent } from "../components";
import { addEmployee as addEmployeeAction } from "./../services/employee.service";
import {
  getAddEmployeeError,
  getAddEmployee,
  getAddEmployeePending
} from "../reducers/addEmployee.reducer";

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
)(AddEmployeeFormComponent);
