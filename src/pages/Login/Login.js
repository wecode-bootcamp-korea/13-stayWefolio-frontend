import React, { Component } from "react";
import "../Login/Login.scss";
import Modal from "./ModalComponent/Modal";

const API = "http://10.58.1.45:8000/user/login";
export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // handleLogin = (e) => {
  //   e.preventDefault();
  //   fetch(API, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.password,
  //     }),
  //   })
  //     // 비동기 처리
  //     .then((response) => response.json())
  //     .then((result) => console.log("결과: ", result));
  //   // .then((result) => {
  //   //   console.log("=============");
  //   //   console.log("백엔드 응답 메세지 :", result);
  //   //   if (result.MESSAGE === "SUCCESS") {
  //   //     localStorage.setItem("token", result);
  //   //   }
  //   // });
  // };
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
                  name="email"
                  onChange={this.handleInput}
                  type="text"
                  className="emailInput"
                  required
                  placeholder="Email Address"
                ></input>

                <input
                  name="password"
                  onChange={this.handleInput}
                  type="password"
                  className="passwordInput"
                  required
                  placeholder="Password"
                ></input>

                <button
                  onClick={this.handleLogin}
                  className={
                    this.state.email.includes("@") &&
                    this.state.password.length > 7
                      ? "falseBtn loginBtn"
                      : "loginBtn"
                  }
                >
                  Login
                </button>
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
