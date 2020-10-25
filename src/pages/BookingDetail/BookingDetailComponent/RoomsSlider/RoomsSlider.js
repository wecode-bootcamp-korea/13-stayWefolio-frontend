import React, { Component } from "react";
import RoomImgSlider from "../RoomsImgSlider/RoomsImgSlider";
import "./RoomsSlider.scss";
import "@fortawesome/fontawesome-free/js/all.js";

export class RoomsSlider extends Component {
  render() {
    return (
      <section className="RoomsSlider">
        <div className="roomsContent">
          <RoomImgSlider />
          <div className="roomsRight">
            <div className="roomsRightTop">
              <p className="topTitle">가든 풀 빌라</p>
              <p className="topType">기본형</p>
              <p className="topDesc">
                자연과 어우러진 가든 풀 빌라에는 해수 풀과 자쿠지, 선 베드가
                마련되어 있고, 해변 산책로에 근접해 있어 바닷가로 접근이
                편리하다.
              </p>
              <div className="topBottom">
                <div className="bottomLeft">
                  <ul>
                    <li>체크인 15:00 / 체크아웃 12:00</li>
                    <li>기준 인원 2 / 최대 인원 3</li>
                    <li>객실면적 90m2</li>
                    <li>킹 사이즈 베드 1</li>
                  </ul>
                </div>
                <div className="bottomRight">
                  <div className="featureBox">독채</div>
                  <div className="featureBox">프라이빗</div>
                  <div className="featureBox">개별수영장</div>
                </div>
              </div>
              <div className="roomPrice">￦532,000~</div>
            </div>
            <button className="roomsRightBtn">Booking</button>
          </div>
        </div>
      </section>
    );
  }
}

export default RoomsSlider;
