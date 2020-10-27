import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import "./CheckPage.scss";

class CheckPage extends Component {
  render() {
    return (
      <section className="CheckPage">
        <Nav />
        <div
          className="checkContainer"
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" +
              ")",
          }}
        >
          <div className="darken"></div>
          <div className="checkContent">
            <p className="checkText">
              <span className="bolder1">김보라</span> 님, 감사합니다.
              <br />
              <br />
              <span className="bolder2">
                Solitaire Bangkok, 그랜드 수페리어룸
                <br /> 성인 2명 / 소아 1명 <br />
                12월 13일 - 12월 20일
                <br />
                <br />
              </span>{" "}
              예약이 완료되었습니다.
            </p>
            <button className="goToMainBtn">MAIN으로 이동</button>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default CheckPage;
