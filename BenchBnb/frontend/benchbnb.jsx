import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "./store/store";
import Root from "./components/root";


document.addEventListener("DOMContentLoaded", () => {
  // window.signup = UserApiUtils.signup;
  // window.login = UserApiUtils.login;
  // window.logout = UserApiUtils.logout;
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
});