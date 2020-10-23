import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BookingDetail.scss";
import RoomsSlider from "./BookingDetailComponent/RoomsSlider/RoomsSlider";

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 0,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
};

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

            <Slider {...slickSettings} className="sliderContainer">
              <RoomsSlider />
            </Slider>

            <div className="roomsInfoContainer">
              <div className="infoLeft">
                <div className="leftTop">
                  <p className="roomTitle">가든 풀 빌라</p>
                  <p className="roomType">기본형</p>
                </div>
                <ul className="leftBottom">
                  <li className="roomTime">체크인 15:00 / 체크아웃 12:00</li>
                  <li className="roomPerson">기준 인원 2 / 최대 인원 3</li>
                  <li className="roomWidth">객실면적 90m2</li>
                  <li className="roomBed">킹 사이즈 베드 1</li>
                </ul>
              </div>
              <div className="infoRight">
                <div className="roomDesc">
                  자연과 어우러진 가든 풀 빌라에는 해수 풀과 자쿠지, 선 베드가
                  마련되어 있고, 해변 산책로에 근접해 있어 바닷가로 접근이
                  편리하다.
                </div>
                <div className="rightBottom">
                  <div className="rightContainer1">
                    <p className="infoTitleLeft">FACILITY</p>
                  </div>
                  <div className="rightContainer1">
                    <p className="infoTitleLeft">SERVICE</p>
                  </div>
                  <div className="rightContainer2">
                    <p className="infoTitleLeft">AMENITY</p>
                  </div>
                  <div className="rightContainer3">
                    <p className="infoTitleLeft">EQUIPMENT</p>
                  </div>
                  <div className="rightContainer2">
                    <p className="infoTitleLeft">OPTIONS</p>
                  </div>
                </div>
              </div>
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
