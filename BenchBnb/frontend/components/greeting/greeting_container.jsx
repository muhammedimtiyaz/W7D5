import React from "react";
import { connect } from "http2";


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: ()=> dispatch(logoutCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);