import React from "react";
import ReservationToggle from "../Reservation/ReservationJYcomponent/ReservationToggle";
import ReservationVehicles from "../Reservation/ReservationJYcomponent/ReservationVehicles";

import "./ReservationJY.scss";

class ReservationJY extends React.Component {
  constructor() {
    super();
    this.state = {
      allCheck: false,
    };
  }
  selectAll = async (e) => {
    let targets = document.querySelectorAll(".checkedBox");
    console.log(targets);
    await this.setState({ allCheck: !this.state.allCheck });
    const { allCheck } = this.state;
    for (let i = 0; i < targets.length; i++) {
      targets[i].checked = allCheck;
    }
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
    target.checked = this.state.allCheck ? true : false;
  }

  render() {
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
                <ReservationToggle>
                  <ReservationVehicles
                    infoTitle="개인정보 수집 및 이용 동의"
                    first="1. 수집항목 : [필수] 이름, 연락처, 이메일주소, 인원정보"
                    second="2. 수집 및 이용목적 : 사업자회원과 예약이용자의 원활한 거래 진행, 고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록보존, 스테이폴리오 멤버십 및 프로모션, 이벤트 안내"
                    third="3. 보관기간 : 회원탈퇴 등 개인정보 이용목적 달성 시까지 보관. 단, 상법 및 ‘전자상거래 등에서의 소비자 보호에 관한 법률’ 등 관련 법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관함"
                    fourth="4. 동의 거부권 등에 대한 고지 : 정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다."
                  />
                </ReservationToggle>
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
              <div className="lineAgrForm">
                <ReservationToggle>
                  <ReservationVehicles
                    first="1. 개인정보를 제공받는 자 : stayWeFolio"
                    second="2. 제공하는 개인정보 항목 : [필수] staywefolio  아이디, 이름, 연락처, 이메일주소, 인원정보."
                    third="3. 개인정보를 제공받는 자의 이용목적 : 사업자회원과 예약이용자의 원활한 거래 진행, 고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을 위한 기록보존."
                    fourth="4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 개인정보 이용목적 달성 시 까지 보존합니다."
                    fifth="5. 동의 거부권 등에 대한 고지 : 정보주체는 개인정보 제공 동의를 거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다."
                  />
                </ReservationToggle>

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
                  <ReservationToggle>
                    <ReservationVehicles
                      infoTitle="예약안내"
                      first="예약신청 후 결제 방식에 따라 결제가 완료되면, 예약확정 문자를 보내드립니다."
                      second="계좌이체 신청 후 12시간 이내에 입금이 되지 않을 경우 예약이 취소됩니다."
                      third="해당일에 예약신청이 중복될 경우 입금 순서가 아닌, 신청 순서로 예약이 확정됩니다."
                      fourth="계좌이체 결제시 현금영수증 발행이 가능합니다. 예약시 요청사항에 신청해주세요."
                      fifth="예약 취소는 MyPage - 스테이 예약정보 - [예약 취소 요청] 버튼을 눌러주시기 바랍니다."
                    />
                  </ReservationToggle>
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
                <ReservationToggle className="marginToggle">
                  <ReservationVehicles infoTitle="<Stay We Folio> 혜택 및 프로모션, 이벤트 소식 구독" />
                </ReservationToggle>
              </div>
            </div>
          </section>
        </div>
        {/* ----------------- 약관 동의 칸  -----------------*/}
      </div>
    );
  }
}

export default ReservationJY;
