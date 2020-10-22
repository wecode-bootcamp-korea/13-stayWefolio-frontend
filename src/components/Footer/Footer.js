import React, { Component } from "react";
import "./Footer.scss";

const menus = [
  { id: "1", content: "About" },
  { id: "2", content: "4point of view" },
  { id: "3", content: "Contact us" },
];

const personalInfos = [
  { id: "1", content: "개인정보취급방침" },
  { id: "2", content: "이용약관" },
];

const officeInfos = [
  { id: "1", officeinfo: "- 상호 : 스테위폴리오 - 대표자 : 스테위폴리오" },
  {
    id: "2",
    officeinfo:
      "- 사업장소재지 : 서울특별시 강남구 테헤란로 위워크 10층 어딘가😎-TEL : 1670-4123",
  },
  {
    id: "3",
    officeinfo:
      "- 사업자등록번호: 123-87-33255 - 신고 : 제2020-서울강남-0123호 사업자정보확인",
  },
  {
    id: "4",
    officeinfo: "- 관광사업자등록 : 스테위 폴리오 2020-123049호(강남구청)",
  },
];

const copyRightInfos = [
  { id: "1", info: "* 스테위폴리오의 모든 행위는 행복을 불러옵니다." },
  {
    id: "2",
    info:
      "* 자세한 문의는 웹사이트의 Contact 또는 유선(1670-4123)으로가능합니다.",
  },
];

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul className="menus">
          {menus.map((menu) => {
            return <li key={menu.id}>{menu.content}</li>;
          })}
        </ul>
        <div className="footerInfos">
          <div className="personalInfos">
            {personalInfos.map((infos) => {
              return <span key={infos.id}>{infos.content}</span>;
            })}
            {/* <span className="personalInfo">개인정보취급방침</span>
            <span className="termInfo">이용약관</span> */}
          </div>
          <div className="officeInfos">
            {officeInfos.map((Infos) => {
              return <span key="Infos.id">{Infos.officeinfo}</span>;
            })}
          </div>
          <div className="copyRightInfos">
            {copyRightInfos.map((infos) => {
              return <span key={infos.id}>{infos.info}</span>;
            })}
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
