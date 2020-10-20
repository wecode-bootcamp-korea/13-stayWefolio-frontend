import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul className="menus">
          <li className="about">About</li>
          <li className="view">4point of view</li>
          <li className="contact">Contact us</li>
        </ul>
        <div className="footerInfos">
          <div className="personalInfos">
            <span className="personalInfo">개인정보취급방침</span>
            <span className="termInfo">이용약관</span>
          </div>
          <div className="officeInfos">
            <span className="officeName">
              - 상호 : (주)스테이폴리오 - 대표자 : 이상묵
            </span>
            <span className="officeAddress">
              - 사업장소재지 : 서울특별시 종로구 자하문로9길 24, 2층(통인동) -
              TEL : 1670-4123
            </span>
            <span className="officeNumber">
              - 사업자등록번호: 676-87-00055 - 통신판매업신고 :
              제2015-서울종로-0499호 [사업자정보확인]
            </span>
            <span className="officeTourInfo">
              - 관광사업자등록 : 일반여행업 2018-000049호(종로구청)
            </span>
          </div>
          <div className="copyRightInfos">
            <span className="announcement">
              * 스테이폴리오의 모든 거래에 대한 책임과 환불, 민원 등의 처리는
              스테이폴리오에서 진행합니다.
            </span>
            <span className="contactInfo">
              * 자세한 문의는 웹사이트의 Contact 또는 유선(1670-4123)으로
              가능합니다.
            </span>
            <span className="copyRightInfo">
              COPYRIGHT©2015 STAYFOLIO. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
