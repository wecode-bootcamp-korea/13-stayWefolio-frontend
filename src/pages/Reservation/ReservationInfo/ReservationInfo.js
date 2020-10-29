import React from "react";
import ReservationInfoToggle from "../ReservationInfo/ReservationInfoComponent/ReservationInfoToggle";
import ReservationInfoVehicles from "../ReservationInfo/ReservationInfoComponent/ReservationInfoVehicles";
import reservation_info from "./ReservationInfoComponent/ReservationInfoData";
import "../ReservationInfo/ReservationInfo.scss";

class ReservationInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      allCheck: false,
    };
  }

  selectAll = () => {
    let targets = document.querySelectorAll(".checkedBox");
    this.setState(
      {
        allCheck: !this.state.allCheck,
      },
      () => {
        const { allCheck } = this.state;
        for (let i = 0; i < targets.length; i++) {
          targets[i].checked = allCheck;
        }
      }
    );
  };

  checkValidationOfSelectAll = () => {
    let targets = document.querySelectorAll(".checkedBox");
    for (let i = 0; i < targets.length; i++) {
      if (!targets[i].checked) {
        this.setState({ allCheck: false });
        return;
      }
      this.setState({ allCheck: true });
    }
  };

  componentDidUpdate() {
    let target = document.querySelector(".allCheckBox");
    target.checked = this.state.allCheck && true;
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="Reservation">
        {/* ----------------- 약관 동의 칸  -----------------*/}
        <div className="info">
          <section className="infoSection">
            <div className="joinInfoWrap">
              <div className="joinInfoTitle">
                <div className="infoTitle">
                  <span>이용자 약관 전체 동의</span>
                  <input
                    type="checkbox"
                    name="allCheck"
                    onClick={this.handleCheckBox}
                    className="allCheckBox"
                    onChange={this.selectAll}
                  />{" "}
                </div>
              </div>
              <>
                <div className="agreement">
                  <div className="keyAgreement">
                    개인정보 수집 및 이용 동의(필수)
                  </div>
                  <div className="valueAgreement">
                    <span>
                      동의
                      <input
                        name="firstCheck"
                        type="checkbox"
                        className="checkedBox"
                        onChange={this.checkValidationOfSelectAll}
                      />
                    </span>
                  </div>
                </div>
                <div className="lineAgrForm">
                  <ReservationInfoToggle>
                    <ReservationInfoVehicles
                      data={reservation_info.userInfoCollection}
                    />
                  </ReservationInfoToggle>
                  <div className="agreement">
                    <div className="keyAgreement">
                      개인정보 제3자 제공 동의(필수)
                    </div>
                    <div className="valueAgreement">
                      <span>
                        동의
                        <input
                          name="secondCheck"
                          type="checkbox"
                          className="checkedBox"
                          onChange={this.checkValidationOfSelectAll}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </>
              <div className="lineAgrForm">
                <ReservationInfoToggle>
                  <ReservationInfoVehicles
                    data={reservation_info.userInfoProvision}
                  />
                </ReservationInfoToggle>

                <div className="agreement">
                  <div className="keyAgreement">
                    Hanok Essay Seochon - 환불규정에 대한 동의(필수)
                  </div>
                  <div className="valueAgreement">
                    <span>
                      동의
                      <input
                        name="firstCheck"
                        type="checkbox"
                        className="checkedBox"
                        onChange={this.checkValidationOfSelectAll}
                      />
                    </span>
                  </div>
                </div>
                <div className="agrForm">
                  <ReservationInfoToggle>
                    <ReservationInfoVehicles
                      data={reservation_info.userInfoRefund}
                    />
                  </ReservationInfoToggle>
                </div>
                <div className="agreement">
                  <div className="keyAgreement">
                    마케팅 정보 수신 동의 (선택)
                  </div>
                  <div className="valueAgreement">
                    <span>
                      동의
                      <input
                        name="thirdCheck"
                        type="checkbox"
                        className="checkedBox"
                        onChange={this.checkValidationOfSelectAll}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="lastAgrForm">
                <ReservationInfoToggle className="marginToggle">
                  <ReservationInfoVehicles
                    data={reservation_info.marketingInfo}
                  />
                </ReservationInfoToggle>
              </div>
            </div>
          </section>
        </div>
        {/* ----------------- 약관 동의 칸  -----------------*/}
      </div>
    );
  }
}

export default ReservationInfo;
