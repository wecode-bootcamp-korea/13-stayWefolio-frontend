import React, { Component } from "react";
import "../Signup/Signup.scss";

export class Signup extends Component {
  render() {
    return (
      <div className="signupWrap">
        <div className="navWrap">
          <nav></nav>
        </div>
        <div className="signupContainer">
          <div className="signupBoard">
            <header>
              <span>Sign up</span>
            </header>

            <div className="joinInfoBoard">
              <section className="inputSection">
                <form>
                  <input
                    className="emailInput"
                    placeholder="Email Address"
                  ></input>
                  <input className="nameInput" placeholder="Name"></input>
                  <input
                    className="passwordInput"
                    placeholder="Password"
                  ></input>
                </form>
              </section>

              <section className="infoSection">
                <div className="joinInfoWrap">
                  <div className="joinInfoTitle">
                    <div className="infoTitle">
                      <span>사용자 약관 전체 동의</span>
                      <input
                        className="checkBox"
                        type="checkbox"
                        name="전체동의"
                      />
                    </div>
                  </div>
                  <div className="firstAgreement">
                    <div className="keyAgreement">
                      서비스 이용 약관 동의 (필수)
                    </div>
                    <div className="valueAgreement">
                      <span>
                        동의
                        <input type="checkbox"></input>
                      </span>
                    </div>
                  </div>
                  <div className="firstAgrForm">
                    <button className="moreBtn">
                      <span className="moreTitle clicked">자세히보기</span>
                      <i className="fas fa-angle-down"></i>
                    </button>
                    <div className="firstAgrInfo">
                      <p>개인정보 수집 및 이용 동의</p>
                      <ol>
                        <li>
                          1. 수집항목 : [필수] 이름, 연락처, 이메일주소,
                          인원정보
                        </li>
                        <li>
                          2. 수집 및 이용목적 : 사업자회원과 예약이용자의 원활한
                          거래 진행, 고객상담, 불만처리 등 민원 처리, 분쟁조정
                          해결을 위한 기록보존, 스테이폴리오 멤버십 및 프로모션,
                          이벤트 안내
                        </li>
                        <li>
                          3. 보관기간 : 회원탈퇴 등 개인정보 이용목적 달성
                          시까지 보관. 단, 상법 및 ‘전자상거래 등에서의 소비자
                          보호에 관한 법률’ 등 관련 법령에 의하여 일정 기간
                          보관이 필요한 경우에는 해당 기간 동안 보관함
                        </li>
                        <li>
                          4. 동의 거부권 등에 대한 고지 : 정보주체는 개인정보의
                          수집 및 이용 동의를 거부할 권리가 있으나, 이 경우 상품
                          및 서비스 예약이 제한될 수 있습니다.
                        </li>
                      </ol>
                    </div>

                    <div className="secondAgreement">
                      <div className="keyAgreement">
                        개인정보 취급방침 동의 (필수)
                      </div>
                      <div className="valueAgreement">
                        <span>
                          동의
                          <input type="checkbox"></input>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="secondAgrForm">
                    <button className="moreBtn">
                      <span className="moreTitle clicked">자세히보기</span>
                      <i className="fas fa-angle-down"></i>
                    </button>
                    <div className="secondAgrInfo">
                      <p>제 1조 (총칙)</p>
                      <ol>
                        <li>
                          1. 개인정보란 생존하는 개인에 관한 정보로서 당해
                          정보에 포함되어 있는 성명, 주민등록번호 등의 사항에
                          의하여 당해 개인을 식별할 수 있는 정보 (당해
                          정보만으로는 특정 개인을 식별할 수 없더라도 다른
                          정보와 용이하게 결합하여 식별할 수 있는 것을
                          포함합니다.) 를 말합니다.
                        </li>
                        <li>
                          2. staywefolio는 귀하의 개인정보 보호를 매우
                          중요시하며, ‘정보통신망 이용촉진 및 정보보호에 관한
                          법률’ 상의 개인정보 보호규정 및 정보통신부가 제정한
                          ‘개인정보 보호지침’을 준수하고 있습니다.
                        </li>
                        <li>
                          3. staywefolio는 개인정보취급방침을 정하고 이를
                          귀하께서 언제나 쉽게 확인할 수 있게 공개하도록 하고
                          있습니다.
                        </li>
                        <li>
                          4. staywefolio는 개인정보 처리방침의 지속적인 개선을
                          위하여 개정하는데 필요한 절차를 정하고 있으며,
                          개인정보 처리방침을 회사의 필요한 사회적 변화에 맞게
                          변경할 수 있습니다. 그리고 개인정보처리방침을 개정하는
                          경우 버전번호 등을 부여하여 개정된 사항을 귀하께서
                          쉽게 알아볼 수 있도록 하고 있습니다.
                        </li>
                      </ol>
                    </div>
                    <div className="thirdAgreement">
                      <div className="keyAgreement">
                        마케팅 정보 수신 동의 (선택)
                      </div>
                      <div className="valueAgreement">
                        <span>
                          동의
                          <input type="checkbox"></input>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="thirdAgrForm">
                    <button className="moreBtn">
                      <span className="moreTitle clicked">자세히보기</span>
                      <i className="fas fa-angle-down"></i>
                    </button>
                    <div className="thirdAgrInfo">
                      <p>
                        staywefolio 멤버십 서비스 혜택, 프로모션 및 이벤트,
                        마케팅 정보 안내 등을 주 목적으로 하며 수신 동의 시
                        메일, 문자 메시지, 푸시 알림에 수신 동의 처리됩니다.
                        동의하지 않으셔도 서비스 이용이 가능하며 동의하신
                        이후에도 정보 수신 시 안내에 따라 수신 동의를 철회할 수
                        있습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="signupBtnWrap">
                  <button className="signupBtn">Sign up</button>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="footerWrap">
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default Signup;
