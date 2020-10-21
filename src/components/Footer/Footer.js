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
              - 상호 : 스테위폴리오 - 대표자 : 스테위폴리오
            </span>
            <span className="officeAddress">
              - 사업장소재지 : 서울특별시 강남구 테헤란로 위워크 10층 어딘가😎-
              TEL : 1670-4123
            </span>
            <span className="officeNumber">
              - 사업자등록번호: 123-87-33255 - 신고 : 제2020-서울강남-0123호
              [사업자정보확인]
            </span>
            <span className="officeTourInfo">
              - 관광사업자등록 : 스테위 폴리오 2020-123049호(강남구청)
            </span>
          </div>
          <div className="copyRightInfos">
            <span className="announcement">
              * 스테위폴리오의 모든 행위는 행복을 불러옵니다.
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
