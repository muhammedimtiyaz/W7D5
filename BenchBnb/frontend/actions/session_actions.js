import * as SessionApiUtils from "../utils/session_api_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => {
  debugger
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
  }
};


export const signup = (user) => dispatch => {
  return SessionApiUtils.signup(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON))));
};

export const login = (user) => dispatch => {
  // debugger
  return SessionApiUtils.login(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON))));
};

export const logout = () => {
  // debugger
  return dispatch => {
    return SessionApiUtils.logout().then(response => dispatch(logoutCurrentUser()));
  };
};

// window.login = login;
// window.signup = signup;
// window.logout = logout;