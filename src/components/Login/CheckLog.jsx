import React, { Component } from "react";
import fire from "./Fire";
import Display from "./Display";
import Login from "./Login";
import SignIn from "./SignIn";

class CheckLog extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        //  window.location.href = "http://localhost:3000";
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.user ? <Display /> : <SignIn />}</div>;
  }
}

export default CheckLog;
