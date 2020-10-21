import React, { Component } from "react";
import "../Login/Login.scss";

export class Login extends Component {
  render() {
    return (
      <div className="loginWrap">
        <div className="navWrap">
          <nav></nav>
        </div>
        <div className="loginContainer">
          <div className="navWrap">
            <nav></nav>
          </div>
          <div className="loginBoard">
            <header>
              <span>Login</span>
            </header>
            <section className="btnSection">
              <button className="naverLogin">Login with Naver</button>
              <button className="facebookLogin">Login with Facebook</button>
              <button className="guestLogin">Guest Booking</button>
            </section>
            <section className="inputSection">
              <form>
                <input
                  className="emailInput"
                  placeholder="Email Address"
                ></input>
                <input className="passwordInput" placeholder="Password"></input>
                <button className="loginBtn">Login</button>
              </form>
            </section>
            <section className="signupSection">
              <div className="signupBtnWrap">
                <button className="signupBtn">Sign up</button>
              </div>
              <span className="blockLine">|</span>
              <div className="searchPassBtnWrap">
                <button className="searchPassBtn">Forgot password</button>
              </div>
            </section>
          </div>
        </div>
        <div className="footerWrap">
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default Login;
