import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainMagazine from "./MainComponent/MainMagazine/MainMagazine";
import MainHeader from "./MainComponent/MainHeader/MainHeader";
import MainBottomCard from "./MainComponent/MainBottomCard/MainBottomCard";

import "./Main.scss";

const API = "http://localhost:3000/data/mainData/mainBannerData.json";

const bannerSettings = {
  dots: true,
  infinite: true,
  speed: 0,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
};

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      bannerList: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bannerList: res.data,
        });
      });
  }

  render() {
    const { bannerList } = this.state;

    return (
      <main className="Main">
        <Slider {...bannerSettings} className="slick-container">
          {bannerList.map((banner) => (
            <div className="mainBanner">
              <img className="bannerImage" src={banner.image} alt="banner" />
              <div className="bannerTextContainer">
                <p className="bannerTopText">LAUNCHING EVENT</p>
                <p className="bannerTitle">{banner.hotelName}</p>
                <p className="bannerDesc">{banner.desc}</p>
                <button className="bannerBtn">SHOW NOW</button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mainContent">
          <section className="magazine">
            <div className="contentContainer">
              <MainHeader
                headerTitle="MAGAZINE"
                headerDesc="매주 한번 스테이폴리오가 이야기하는 유니크한 공간!"
                btnText="MORE MAGAZINE"
              />
              <MainMagazine />
            </div>
          </section>
          <section className="pickContainer">
            <div className="contentContainer">
              <MainHeader
                headerTitle="PICK"
                headerDesc="매일 하루 한번! 스테이폴리오가 추천합니다!"
                btnText="MORE PICK"
              />
            </div>
          </section>
          <section className="mainBottom">
            <div className="cardBorderTop">
              <MainBottomCard
                cardTitleTop="유니크한 숙소 공간을"
                cardTitleBottom="추천해주세요."
                cardDescTop="스테이폴리오는 여행자와 창작자 사이에서"
                cardDescBottom="혁신적인 스테이 모델을 지속적으로 소개하고 있습니다."
                cardBtnTxt="CONTACT US"
              />
              <MainBottomCard
                cardTitleTop="FINE STAY AGENCY"
                cardTitleBottom="STAYFOLIO"
                cardDescTop="콘텐츠 제작, 마케팅 전략 수립, 예약 시스템"
                cardDescBottom="비즈니스 모델의 경쟁력을 높이는 호스트 솔루션을 만나보세요."
                cardBtnTxt="SHOW NOW"
              />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
