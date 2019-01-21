import {fetchBenchesAjax} from "../utils/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = () => {
  // debugger
  return dispatch => {
    // debugger
    return fetchBenchesAjax().then(benches => dispatch(receiveBenches(benches)));
  };
};
