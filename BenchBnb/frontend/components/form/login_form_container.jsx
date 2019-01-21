import React from "react";
import SessionForm from "./session_form";
import {withRouter} from "react-router-dom";
import {login} from "../../actions/session_actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
  errors: Object.values(state.errors.session),
  formType: 'login',
  navLink: <Link to="/signup">signup instead</Link>
}};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (currentUser) => dispatch(login(currentUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);