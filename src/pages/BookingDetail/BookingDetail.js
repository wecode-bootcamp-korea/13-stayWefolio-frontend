import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BookingDetail.scss";

export class BookingDetail extends Component {
  render() {
    return (
      <div className="BookingDetail">
        <section className="banner">
          <img
            className="bannerImg"
            alt="hotel"
            src="https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          />
          <div className="bannerTitle">
            <p className="titleText">Mason Pattaya</p>
          </div>
        </section>

        <section className="calender"></section>
        <div className="container">
          <section className="rooms">
            <header className="roomsHeader">
              <p className="roomsTitle">
                <span className="titleSpan">OUR</span> ROOMS
              </p>
              <p className="titleBottom">
                조용한 휴식이 필요하다면 찾게 되는 곳
              </p>
            </header>
            <div className="roomsContainer"></div>
            <div className="roomsInfoContainer">
              <div className="infoLeft">
                <div className="leftTop">
                  <p className="roomTitle">가든 풀 빌라</p>
                  <p className="roomType">기본형</p>
                </div>
                <div className="leftBottom">
                  <p className="roomTime">체크인 15:00 / 체크아웃 12:00</p>
                  <p className="roomPerson">기준 인원 2 / 최대 인원 3</p>
                  <p className="roomWidth">객실면적 90m2</p>
                  <p className="roomBed">킹 사이즈 베드 1</p>
                </div>
              </div>
              <div className="infoRight"></div>
            </div>
            <button className="moreInfoBtn">
              <p>스테이 정보 보기</p>
              <i class="fas fa-angle-down"></i>
            </button>
          </section>
        </div>
      </div>
    );
  }
}

export default BookingDetail;
