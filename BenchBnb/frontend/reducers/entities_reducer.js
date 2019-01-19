import { combineReducer } from "redux";
import { usersReducer } from "./users_reducer";

export const entitiesReducer = combineReducer({
  users: usersReducer
});

export default entitiesReducer;