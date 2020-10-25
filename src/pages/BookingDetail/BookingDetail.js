import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BookingDetail.scss";
import RoomsSlider from "./BookingDetailComponent/RoomsSlider/RoomsSlider";

const slickRoomsSettings = {
  infinite: true,
  speed: 0,
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 2500,
  arrows: false,
  draggable: false,
  dots: true,
  appendDots: (dots) => (
    <div className="hi" style={{}}>
      <ul style={{ margin: "0" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => (
    <div
      style={{
        width: "30px",
        border: "1px white solid",
        color: "#FFF",
        position: "absolute",
        bottom: "583px",
        left: "490px",
        width: "7px",
        height: "7px",
        margin: "0 -3.6px",
        borderRadius: "100%",
      }}
    ></div>
  ),
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

        {/* <section className="calender"></section> */}
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

            <div className="roomsContainer">
              <div className="roomsTop">
                <div className="roomsTopLeft">
                  <i className="fas fa-circle"></i>
                  <p>총 5개 룸</p>
                </div>
                <p className="roomsTopTitle">더블 그랜드 풀 빌라</p>
                <div className="roomsTopRight"></div>
              </div>
              <Slider {...slickRoomsSettings} className="sliderWrapper">
                <RoomsSlider />
                <RoomsSlider />
                <RoomsSlider />
                <RoomsSlider />
              </Slider>
            </div>

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
                  <div className="rightContainer">
                    <p className="infoTitleLeft">FACILITY</p>
                    <ul className="iconList">
                      <li className="infoIconContainer">
                        <img
                          className="iconStyle"
                          src="https://www.flaticon.com/svg/static/icons/svg/963/963890.svg"
                          alt="facility icon"
                        />
                        <p className="iconDesc">야외가구</p>
                      </li>
                      <li className="infoIconContainer">
                        <img
                          className="iconStyle"
                          src="https://www.flaticon.com/premium-icon/icons/svg/3183/3183239.svg"
                          alt="facility icon"
                        />
                        <p className="iconDesc">정원</p>
                      </li>
                      <li className="infoIconContainer">
                        <img
                          className="iconStyle"
                          src="https://www.flaticon.com/svg/static/icons/svg/515/515056.svg"
                          alt="facility icon"
                        />
                        <p className="iconDesc">테라스</p>
                      </li>
                      <li className="infoIconContainer">
                        <img
                          className="iconStyle"
                          src="https://www.flaticon.com/svg/static/icons/svg/1606/1606657.svg"
                          alt="facility icon"
                        />
                        <p className="iconDesc">독립키친</p>
                      </li>
                      <li className="infoIconContainer">
                        <img
                          className="iconStyle"
                          src="https://www.flaticon.com/svg/static/icons/svg/995/995072.svg"
                          alt="facility icon"
                        />
                        <p className="iconDesc">독립화장실</p>
                      </li>
                    </ul>
                  </div>
                  <div className="rightContainer">
                    <p className="infoTitleLeft">SERVICE</p>
                    <ul className="iconList">
                      <li className="infoIconContainer">
                        <img
                          className="iconStyle"
                          src="https://www.flaticon.com/svg/static/icons/svg/884/884903.svg"
                          alt="facility icon"
                        />
                        <p className="iconDesc">주차</p>
                      </li>
                    </ul>
                  </div>
                  <div className="rightContainer">
                    <p className="infoTitleLeft">AMENITY</p>
                    <ul className="textListUl">
                      <li className="textList">배스가운</li>
                      <li className="textList">타올</li>
                      <li className="textList">슬리퍼</li>
                    </ul>
                  </div>
                  <div className="rightContainer">
                    <p className="infoTitleLeft">EQUIPMENT</p>
                    <ul className="textListUl">
                      <li className="textList">WIFI</li>
                      <li className="textList">컨디셔너</li>
                      <li className="textList">바디워시</li>
                      <li className="textList">헤어드라이어</li>
                      <li className="textList">핸드워시</li>
                    </ul>
                  </div>
                  <div className="rightContainer">
                    <p className="infoTitleLeft">OPTIONS</p>
                    <ul className="textListUl">
                      <li className="textList">인원규정</li>
                      <li className="textList">변상안내</li>
                      <li className="textList">금연안내</li>
                    </ul>
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
