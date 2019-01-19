import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { entitiesReducer } from "./entities_reducer";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
    }
};
