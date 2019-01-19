import { combineReducer } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";

const rootReducer = combineReducer({
  entities : entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;