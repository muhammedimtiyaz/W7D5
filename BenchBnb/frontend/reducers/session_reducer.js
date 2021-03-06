import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = {
  id: null
};

export const sessionReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    // debugger
      return {id: action.currentUser.id};
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};