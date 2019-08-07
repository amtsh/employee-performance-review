import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { LoginFormComponent } from "../components";

import { setSession } from "../actions/Session.actions";
import { getSession } from "../reducers/sessionReducer.reducer";

const setSessionAction = session => {
  return dispatch => {
    dispatch(setSession(session));
  };
};

const mapStateToProps = state => ({
  email: getSession(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSession: setSessionAction
    },
    dispatch
  );

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);

export default withRouter(LoginFormContainer);
