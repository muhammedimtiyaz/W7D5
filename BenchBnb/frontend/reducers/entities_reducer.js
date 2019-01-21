import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import benchReducer from "./benches_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
  benches: benchReducer,
});

export default entitiesReducer;