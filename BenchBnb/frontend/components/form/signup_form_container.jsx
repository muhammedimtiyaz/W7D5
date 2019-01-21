import React from "react";
import {connect} from "react-redux";
import SessionForm from "./session_form";
import {withRouter} from "react-router-dom";
import { signup } from "../../actions/session_actions";
import {Route} from "react-router-dom";
import { Link } from "react-router-dom";


const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors.session),
  formType: 'signup',
  navLink: <Link to="/login">login instead</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));