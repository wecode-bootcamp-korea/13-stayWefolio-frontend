import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavLogin.scss";

class NavLogin extends Component {
  render() {
    return (
      <div className="NavLogin">
        <Link className="loginLink" to="/login">
          LOGIN
        </Link>
        <span className="loginAnd">or</span>
        <Link className="signupLink" to="/signup">
          REGISTER
        </Link>
      </div>
    );
  }
}

export default NavLogin;
