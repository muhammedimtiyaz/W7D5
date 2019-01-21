import React from "react";
import { fetchBenches } from "../../actions/bench_actions";
import BenchIndex from "./bench_index";
import { connect } from "react-redux";

const msp = ({benches}) => {
  debugger
  return {
  benches: Object.values(benches),
  }
};

const mdp = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
});

export default connect(msp, mdp)(BenchIndex);