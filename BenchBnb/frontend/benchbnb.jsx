import React from "react";
import ReactDOM from "react-dom";
import * as UserApiUtils from "./utils/users_api_utils";

document.addEventListener("DOMContentLoaded", () => {
  window.signup = UserApiUtils.signup;
  window.login = UserApiUtils.login;
  window.logout = UserApiUtils.logout;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Hello</h1>, root)
});