import React, { Component } from "react";
import "../Login/Login.scss";
import { withRouter } from "react-router-dom";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "@",
      name: "ab",
      password: "12345678",
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  goToSignUp = () => {
    this.props.history.push("/signup");
  };

  handleLogin = (e) => {
    // e.preventDefault();
    // fetch(API, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password,
    //   }),
    // });
    // 비동기 처리
    // .then((response) => response.json())
    // .then((result) => console.log("결과: ", result));
    // .then((result) => {
    //   console.log("=============");
    //   console.log("백엔드 응답 메세지 :", result);
    //   if (result.MESSAGE === "SUCCESS") {
    //     localStorage.setItem("token", result);
    // this.props.history.push("/");
    //   }
    // });
  };

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
                />
                <span
                  name="inputSign"
                  className={
                    this.state.email.includes("@")
                      ? "emailMessage"
                      : "warningMessage"
                  }
                >
                  이메일 주소를 입력하세요.
                </span>
                <input
                  name="password"
                  onChange={this.handleInput}
                  type="password"
                  className="passwordInput"
                  required
                  placeholder="Password"
                />
                <span
                  className={
                    this.state.password.length > 7
                      ? "passwordMessage "
                      : "warningMessage"
                  }
                >
                  비밀번호를 입력하세요.
                </span>
                <button
                  onClick={this.handleLogin}
                  className={
                    this.state.email.includes("@") &&
                    this.state.password.length > 7
                      ? "loginBtn falseBtn"
                      : "falseBtn"
                  }
                >
                  Login
                </button>
              </form>
            </section>
            <section className="signupSection">
              <div className="signupBtnWrap">
                <button onClick={this.goToSignUp} className="signupBtn">
                  Sign up
                </button>
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

export default withRouter(Login);
