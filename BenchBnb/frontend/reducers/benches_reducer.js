import {RECEIVE_BENCHES} from "../actions/bench_actions";
// import {merge} from "lodash";

const benchreducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};

export default benchreducer;