import React, { Component } from "react";
import "./Footer.scss";

const API = "/data/dataSSY/footer.json";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      menus: [],
      personalInfos: [],
      officeInfos: [],
      copyRightInfos: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          menus: res.menus,
          personalInfos: res.personalInfos,
          officeInfos: res.officeInfos,
          copyRightInfos: res.copyRightInfos,
        });
      });
  }

  render() {
    const { menus, personalInfos, officeInfos, copyRightInfos } = this.state;
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
          </div>
          <div className="officeInfos">
            {officeInfos.map((Infos) => {
              return <span key={Infos.id}>{Infos.officeinfo}</span>;
            })}
          </div>
          <div className="copyRightInfos">
            {copyRightInfos.map((infos) => {
              return (
                <span
                  key={infos.id}
                  className={
                    infos.info.includes("RIGHTS")
                      ? "copyRights eng"
                      : "copyRights"
                  }
                >
                  {infos.info}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
