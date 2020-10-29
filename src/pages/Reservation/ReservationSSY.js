import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { faSearch, faTextHeight } from "@fortawesome/free-solid-svg-icons";
import "./Reservation.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

const TODAY = new Date();
const OPTIONS = [
  { id: 1, value: 0, description: "0명" },
  { id: 2, value: 1, description: "1명" },
  { id: 3, value: 2, description: "2명" },
];

const API = "http://10.58.1.45:8000/booking/1";

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      checkInDate: "",
      checkOutDate: "",
      name: "",
      phoneNumber: "",
      email: "",
      adult: 0,
      child: 0,
      infant: 0,
      optionBreakfast: false,
      optionPickUp: false,
      demand: "",
      price: 200000,
      discount: 20000,
      optionTotal: 0,
      total: 0,
      paymentId: 0,
      allCheck: false,
      bookingInfo: [],
      roomImg: "",
    };
  }

  // componentDidMount() {
  //   fetch(`${API}?start=${checkInDate}&end=${checkOutDate}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.state = {
  //         roomImg: res.booking_info[0]?.room_image;
  //       }
  //     })
  // }

  componentDidUpdate(prevPros, prevState) {
    const { checkInDate, checkOutDate } = this.state;
    if (
      prevState.checkInDate !== checkInDate ||
      prevState.checkOutDate !== checkOutDate
    ) {
      this.getPrice(checkInDate, checkOutDate);
    }

    if (prevState.optionTotal !== this.state.optionTotal) {
      this.getTotal();
    }
  }

  getPrice = (checkInDate, checkOutDate) => {
    fetch(`${API}?start=${checkInDate}&end=${checkOutDate}`, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.tm2qQm17jEeWhj-0zvLh7jt0xhk284HJpD74HqI_Z-A",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bookingInfo: res.booking_info,
          price: res.booking_info[0]?.total,
          discount: Math.floor(res.booking_info[0]?.total * 0.1),
        });
      });
  };

  getValue = (event, picker) => {
    const bookingDate = event.target.value;
    const checkIn = bookingDate.split("-")[0].slice(0, 10).split("/");
    const checkOut = bookingDate.split("-")[1].slice(1, 11).split("/");

    this.setState({
      checkInDate: `${checkIn[2]}-${checkIn[0]}-${checkIn[1]}`,
      checkOutDate: `${checkOut[2]}-${checkOut[0]}-${checkOut[1]}`,
    });
  };

  getNightsAndDays = () => {
    const { checkInDate, checkOutDate } = this.state;
    const checkInMonth = +checkInDate.split("-")[1];
    const checkOutMonth = +checkOutDate.split("-")[1];
    const checkInDays = +checkInDate.split("-")[2];
    const checkOutDays = +checkOutDate.split("-")[2];

    if (checkInMonth === checkOutMonth) {
      const days = checkOutDays - checkInDays;
      return `${days}박 ${days + 1}일`;
    } else {
      if (checkInMonth % 2 === 0) {
        const days = 31 - checkInDays + checkOutDays;
        return `${days - 1}박 ${days}일`;
      } else if (checkInMonth % 2 !== 0) {
        const days = 30 - checkInDays + checkOutDays;
        return `${days - 1}박 ${days}일`;
      }
    }
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleOption = (event) => {
    const { name } = event.target;
    this.setState({ [name]: !this.state[name] }, () => {
      const { optionBreakfast, adult, child, infant } = this.state;
      const breakFastCost = optionBreakfast
        ? 5000 * (adult + child + infant)
        : 0;
      this.setState({ optionTotal: breakFastCost });
    });
  };

  handlePayTool = (event) => {
    const { name } = event.target;
    const isPayment = event.currentTarget.value === "naver" ? 1 : 2;
    this.setState({ [name]: isPayment });
  };

  getOptionTotal = () => {
    const breakFastCost = this.state.optionBreakfast ? 5000 : 0;
    this.setState({ optionTotal: breakFastCost });
  };

  getTotal = () => {
    const { price, discount, optionTotal } = this.state;
    const total = price - discount + optionTotal;
    console.log(total);
    this.setState({ total: total });
  };

  render() {
    const {
      checkInDate,
      checkOutDate,
      name,
      phoneNumber,
      email,
      adult,
      child,
      infant,
      optionBreakfast,
      optionPickUp,
      demand,
      price,
      optionPrice,
      discount,
      total,
      paymentId,
      bookingInfo,
      breakfastPrice,
      optionTotal,
    } = this.state;

    console.log(
      "객실 가격 : ",
      price,
      "할인가격 : ",
      discount,
      "추가 옵션 가격 : ",
      optionTotal,
      "최종가격 : ",
      total
    );
    return (
      <div className="Reservation">
        <div className="container">
          <header>
            <div>
              <span className="mainTitle">BOOKING</span>
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

                <div className="reserveInfo">
                  <div className="hotelImg">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/stayfolio.images/system/pictures/images/000/047/961/large/93f0fd9dc22fda46a9d540c69267b6baaf699493.jpg?1590904467" />
                  </div>

                  <div className="date">
                    <span className="title">예약일</span>
                    <div className="datePickCon">
                      <DateRangePicker
                        initialSettings={{
                          startDate: TODAY,
                          endDate: TODAY,
                          // alwaysShowCalendars: false,
                        }}
                        onApply={this.getValue}
                      >
                        <input type="text" className="form-control" />
                      </DateRangePicker>
                      <span className="dateRange">{this.getNightsAndDays}</span>
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
                          <img src="https://s3.ap-northeast-2.amazonaws.com/stayfolio.images/system/pictures/images/000/054/712/original/11ea6def0f1e5345244aad018d0e6e34e8540845.jpeg?1601347488" />
                          <span className="breackfastTitle">조식</span>
                          <span className="breakfastPrice">(5,000원)</span>
                        </div>
                        <p>
                          조식은 '노르딕' 브런치 카페와의 협업으로 만든
                          샌드위치를 과일과 주스 또는 커피와 함께
                          제공해드립니다. 오전 9시~10시까지 스테이 내 카페에서
                          드실 수 있습니다.
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
                          <img src="https://s3.ap-northeast-2.amazonaws.com/stayfolio.images/system/pictures/images/000/054/713/original/fd2526739bd97bff6f6fcb99fc2039cf57ba7e0d.jpeg?1601347539" />
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
                      <div className="priceCon">
                        <span className="priceCategory">객실요금</span>
                        <div className="priceWon">
                          <span className="priceNum">{price}</span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="priceCon">
                        <span className="priceCategory">추가옵션</span>
                        <div className="priceWon">
                          <span className="priceNum">{optionTotal}</span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="priceCon">
                        <span className="priceCategory">할인금액</span>
                        <div className="priceWon">
                          <span className="priceNum">{discount}</span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="totalPriceCon">
                        <span className="priceCategory">총 결제금액</span>
                        <div className="">
                          <span className="totalPrice">{total}</span>
                          <span className="won">원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="payTool">
                    <span className="title">결제정보</span>

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
                  {/* <ReservationTerms/> */}
                </div>
              </div>
            </div>
          </div>
          {/* <Information /> */}
        </div>
      </div>
    );
  }
}

export default Reservation;
