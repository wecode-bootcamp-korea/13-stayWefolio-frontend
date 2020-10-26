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
};

export class BookingDetail extends Component {
  constructor() {
    super();
    this.state = {
      roomInfoList: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://localhost:3000/data/bookingDetailData/roomInfoData.json/${this.state.match.params.id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          roomInfoList: res.detail,
        });
      });
  }

  render() {
    const { roomInfoList } = this.state;

    return (
      <div className="BookingDetail">
        <section className="banner">
          <img
            className="bannerImg"
            alt="hotel"
            src="https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
          />
          <div className="bannerTitle">
            <p className="titleText">
              {roomInfoList[0] &&
                roomInfoList[0].common_info.hotel_english_name}
            </p>
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
                {roomInfoList[0] &&
                  roomInfoList[0].common_info.hotel_introduction}
              </p>
            </header>

            <div className="roomsContainer">
              <Slider {...slickRoomsSettings} className="sliderWrapper">
                <RoomsSlider
                  roomName={
                    roomInfoList[1] && roomInfoList[1].rooms[0].room_name
                  }
                  roomType="기본형"
                  roomDesc="자연과 어우러진 가든 풀 빌라에는 해수 풀과 자쿠지, 선 베드가 마련되어 있고, 해변 산책로에 근접해 있어 바닷가로 접근이 편리하다."
                />
                <RoomsSlider
                  roomName="듀플렉스 그랜드 풀 빌라"
                  roomType="기본형"
                  roomDesc="환상적인 오션뷰와 더불어 넓은 공간을 선호하는 이들에게 최적이다. 2층 규모의 빌라는 아래층에 리빙룸, 위층에는 침실로 구성되어 있다."
                />
                <RoomsSlider
                  roomName="비치사이드 오션뷰 풀 빌라"
                  roomType="기본형"
                  roomDesc="파타야의 황홀한 오션뷰를 감상할 수 있는 비치사이드 오션뷰 풀 빌라에는 넓은 침실과 리빙룸이 갖춰져있어 로맨틱한 시간을 즐길 수 있다."
                />
                <RoomsSlider
                  roomName="비치프론트 그랜드 풀 빌라"
                  roomType="기본형"
                  roomDesc="리조트 단지의 가장 앞 부분에 위치하여 환상적인 오션뷰를 감상할 수 있다. 침실이 바다를 마주 보고, 50평형대의 규모로 프라이빗 한 휴식을 마음껏 즐길 수 있다."
                />
                <RoomsSlider
                  roomName="더블 그랜드 풀 빌라"
                  roomType="기본형"
                  roomDesc="단층 구조로 4인 규모의 투숙객이 편안히 시간을 보낼 수 있도록 꾸며졌다. 2개의 마스터 베드룸에는 각각 욕조와 화장실이 갖춰져있고, 공동으로 사용하는 리빙룸이 있다."
                />
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
                          src="https://www.flaticon.com/svg/static/icons/svg/427/427584.svg"
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
                      <li className="textList">치약</li>
                      <li className="textList">헤어드라이어</li>
                      <li className="textList">바디워시</li>
                      <li className="textList">핸드워시</li>
                      <li className="textList">샴푸</li>
                      <li className="textList">컨디셔너</li>
                    </ul>
                  </div>
                  <div className="rightContainer">
                    <p className="infoTitleLeft">EQUIPMENT</p>
                    <ul className="textListUl">
                      <li className="textList">WIFI</li>
                      <li className="textList">TV</li>
                      <li className="textList">블루투스 스피커</li>
                      <li className="textList">냉난방</li>
                      <li className="textList">냉장고</li>
                      <li className="textList">식기</li>
                      <li className="textList">조리도구</li>
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
