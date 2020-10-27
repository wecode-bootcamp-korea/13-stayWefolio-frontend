import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import "./ReservationSSY.scss";

const OPTIONS = [
  { id: 1, value: 0, description: "0명" },
  { id: 2, value: 1, description: "1명" },
  { id: 3, value: 2, description: "2명" },
];

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      adult: 0,
      child: 0,
      infant: 0,
      optionBreakfast: false,
      optionPickUp: false,
      demand: "",
      price: 0,
      discount: 0,
      total: 0,
      paymentId: 0,
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleOption = (event) => {
    const { name } = event.target;
    const isChecked = event.currentTarget.value === "true" ? true : false;
    this.setState({ [name]: isChecked });
  };

  handlePayTool = (event) => {
    const { name } = event.target;
    const isPayment = event.currentTarget.value === "naver" ? 1 : 2;

    this.setState({ [name]: isPayment });
  };

  render() {
    console.log(this.state);
    return (
      <div className="Reservation">
        <div className="container">
          <header>
            <div>
              <span className="title">BOOKING</span>
              <br></br>
              <span className="titleDesc">
                원하시는 객실과 날짜를 선택해주세요.
              </span>
            </div>
          </header>
          <div className="reservationCon">
            <div className="outLine">
              <div className="content">
                <div className="reservationDesc">
                  <h1>RESERVATIONS</h1>
                  <span>예약 내용을 확인 후 결제해 주세요.</span>
                </div>
                <div className="calender"></div>
                <div className="InfosContainer">
                  <div className="date">
                    <span className="title">예약일</span>
                    <div className="checkDatesWrap">
                      <p className="checkIn">Check in</p>
                      <span className="checkInDate"> - (Check in Date)</span>
                      <p className="checkOut">Check out</p>
                      <span className="checkOutDate"> - (Check out Date)</span>
                    </div>
                  </div>

                  <div className="name">
                    <span className="title">이름</span>
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleInput}
                    ></input>
                  </div>

                  <div className="contactNum">
                    <span className="title">연락처</span>
                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={this.handleInput}
                    ></input>
                  </div>

                  <div className="email">
                    <span className="title">이메일</span>
                    <input
                      type="text"
                      name="email"
                      onChange={this.handleInput}
                    ></input>
                  </div>

                  <div className="people">
                    <span className="title">인원(최대 2명)</span>
                    <div className="selectWrap">
                      <div className="adultWrap">
                        <span>성인</span>
                        <select
                          name="adult"
                          className="adult"
                          onChange={this.handleInput}
                        >
                          {OPTIONS.map((option) => {
                            return (
                              <option key={option.id} value={option.value}>
                                {option.description}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="childWrap">
                        <span>소아</span>
                        <select
                          name="child"
                          className="child"
                          onChange={this.handleInput}
                        >
                          {OPTIONS.map((option) => {
                            return (
                              <option key={option.id} value={option.value}>
                                {option.description}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="infantWrap">
                        <span
                          className="infant
                        "
                        >
                          유아
                        </span>
                        <select
                          name="infant"
                          className="infant"
                          onChange={this.handleInput}
                        >
                          {OPTIONS.map((option) => {
                            return (
                              <option key={option.id} value={option.value}>
                                {option.description}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="option">
                    <span className="optionTitle">추가/옵션 선택</span>
                    <div className="miniOption">
                      <div className="breakfastWrap">
                        <div className="breakfastTitleWrap">
                          <span className="breackfastTitle">조식</span>
                          <span className="breakfastPrice">5,000원</span>
                        </div>
                        <p>
                          1인당 추가 5,000원입니다. 건강한 호밀빵, 무농약
                          샐러드, 제철채소와 과일, 무항생제 제주소세지로
                          구성되었습니다.
                        </p>
                        <div className="breakfastCheckBoxs">
                          (필수)
                          <label className="check" htmlFor="check">
                            <input
                              type="radio"
                              value="true"
                              name="optionBreakfast"
                              onChange={this.handleOption}
                            />
                            선택
                          </label>
                          <label className="check" htmlFor="uncheck">
                            <input
                              type="radio"
                              value="false"
                              name="optionBreakfast"
                              onChange={this.handleOption}
                            />
                            선택하지 않음
                          </label>
                        </div>
                      </div>
                      <div className="pickUpWrap">
                        <div className="pickUpTitleWrap">
                          <span className="pickUpTitle">
                            픽업 서비스(필수선택)
                          </span>
                        </div>
                        <p>
                          - 하루 2회 서울 시내권 픽업차량이 순회중이오니,
                          픽업서비스가 필요하신 게스트는 예약 시 미리
                          신청해주세요 <br />- 신청자가 없는 경우 차량을
                          운행하지 않으니 필요하실 경우 꼭 미리 선택해주세요.
                        </p>
                        <div className="pickUpCheckBoxs">
                          (필수)
                          <label className="check" htmlFor="check">
                            <input
                              type="radio"
                              value="true"
                              name="optionPickUp"
                              onChange={this.handleOption}
                            />
                            선택
                          </label>
                          <label className="check" htmlFor="uncheck">
                            <input
                              type="radio"
                              value="false"
                              name="optionPickUp"
                              onChange={this.handleOption}
                            />
                            선택하지 않음
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="request">
                    <span className="title">요청사항</span>
                    <textarea
                      name="demand"
                      onChange={this.handleInput}
                    ></textarea>
                  </div>

                  <div className="price">
                    <span className="title">Total</span>
                    <div className="totalDetail">
                      <div className="roomPrice">
                        <span className="priceTitle">객실요금</span>
                        <div className="priceWrap">
                          <span className="priceCal">2,070,000</span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="optionPrice">
                        <span className="priceTitle">추가옵션</span>
                        <div className="priceWrap">
                          <span className="priceCal">-207,000</span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="discountPrice">
                        <span className="priceTitle">할인금액</span>
                        <div className="priceWrap">
                          <span className="priceCal">-</span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="totalPrice">
                        <span className="priceTitle">총 결제금액</span>
                        <div className="totalPriceWrap">
                          <span className="priceCal">1,863,000</span>
                          <span className="won">원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="payTool">
                    <span className="title">결제정보</span>
                    <div className="payOptions">
                      <label htmlFor="naverPay">
                        <input
                          type="radio"
                          name="paymentId"
                          value="naver"
                          onChange={this.handlePayTool}
                        />
                        네이버페이
                      </label>
                      <label htmlFor="creditCard">
                        <input
                          type="radio"
                          name="paymentId"
                          value="creditCard"
                          onChange={this.handlePayTool}
                        />
                        신용카드
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
