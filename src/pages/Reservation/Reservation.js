import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Information from "./Information/Information";
import ReservationInput from "./ReservationInput/ReservationInput";
import PeopleOption from "./PeopleOption/PeopleOption";
import AdditionalOption from "./AdditionalOption/AdditionalOption";
// import ReservationTerms from "./ ReservationTerms/ReservationTerms"

import "react-calendar/dist/Calendar.css";
import "./Reservation.scss";

const TODAY = new Date();
const OPTIONS = [
  { id: 1, value: 0, description: "0명" },
  { id: 2, value: 1, description: "1명" },
  { id: 3, value: 2, description: "2명" },
];

const PEOPLE_OPTIONS = [
  { age: "성인", name: "adult" },
  { age: "소아", name: "child" },
  { age: "유아", name: "infant" }
];

const INPUT_INFO = [
  {  title: "이름", name: "name" },
  { title: "연락처", name: "phoneNumber" },
  { title: "이메일", name: "email" }
];

const ADDITIONAL_OPTIONS = [
  { 
    img: "https://s3.ap-northeast-2.amazonaws.com/stayfolio.images/system/pictures/images/000/054/712/original/11ea6def0f1e5345244aad018d0e6e34e8540845.jpeg?1601347488",
    title: "조식",
    info: "(5,000원)",
    name: "optionBreakfast",
    desc: "조식은 '노르딕' 브런치 카페와의 협업으로 만든 샌드위치를 과일과 주스 또는 커피와 함께 제공해드립니다. 오전 9시~10시까지 스테이 내 카페에서 드실 수 있습니다."
   },
    { 
    img: "https://s3.ap-northeast-2.amazonaws.com/stayfolio.images/system/pictures/images/000/054/713/original/fd2526739bd97bff6f6fcb99fc2039cf57ba7e0d.jpeg?1601347539",
    title: "픽업 서비스",
    info: "(필수선택)",
    name: "optionPickUp",
    desc: "하루 2회 서울 시내권 픽업차량이 순회중이오니, 픽업서비스가 필요하신 게스트는 예약 시 미리 신청해주세요. (신청자가 없는 경우 차량을 운행하지 않으니 필요하실 경우 꼭 미리 선택해주세요)"
   }
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
      price:0,
      discount: 0,
      total: 0,
      paymentId: 0,
      allCheck: false,
      bookingInfo: [],
    };
  }

  componentDidUpdate(prevPros, prevState) {
    const { checkInDate, checkOutDate } = this.state;
    if (
      prevState.checkInDate !== checkInDate ||
      prevState.checkOutDate !== checkOutDate
    ) {
      this.getPrice(checkInDate, checkOutDate);
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
        });
      });
  };

  getDateValue = (event, picker) => {
    const bookingDate = event.target.value;
    const checkIn = bookingDate.split("-")[0].slice(0, 10).split("/");
    const checkOut = bookingDate.split("-")[1].slice(1, 11).split("/");

    this.setState({
      checkInDate: `${checkIn[2]}-${checkIn[0]}-${checkIn[1]}`,
      checkOutDate: `${checkOut[2]}-${checkOut[0]}-${checkOut[1]}`,
    });
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getInputValue = (name, value) => {
    this.setState({ [name]: value });
  }

  getOptionValue = (name, value) => {
    console.log(name, value)
    const isChecked = value === "true" ? true : false;
    this.setState({ [name]: isChecked });
  }

  handlePayTool = (event) => {
    const { name } = event.target;
    const isPayment = event.currentTarget.value === "naver" ? 1 : 2;
    this.setState({ [name]: isPayment });
  };

  postReservationInfo = () => {
    const { checkInDate, checkOutDate, name, phoneNumber, email, adult, child, infant, optionBreakfast, optionPickUp, demand, price, total, paymentId, 
    } = this.state;

      fetch(API, {
      method: "POST",
      body: JSON.stringify({
        start: checkInDate,
        end: checkOutDate,
        name: name,
        phone_number: phoneNumber,
        email: email,
        adult: adult, 
        chlid: child,
        infant: infant,
        breakfast: optionBreakfast,
        pickUp: optionPickUp,
        demand: demand,
        price: price,
        total: total, 
        payment_id: paymentId
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("==================================");
        console.log("백엔드에서 오는 응답메세지: ", result);
      });
    this.props.history.push("/main-eunsun");
  }

  render() {
    console.log(this.state.optionBreakfast);
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
      paymentId,
      roomPrice,
    } = this.state;

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
                        }}
                        onApply={this.getDateValue}
                      >
                        <input type="text" className="form-control" />
                      </DateRangePicker>
                      <span className="dateRange">2박 3일</span>
                    </div>
                  </div>

                  {INPUT_INFO.map((input, idx) => (
                    <ReservationInput 
                      key={idx}
                      title={input.title} 
                      name={input.name} 
                      event={this.getInputValue} />
                  ))}

                  <div className="people">
                    <span className="title">인원(최대 2명)</span>
                    <div className="selectWrap">
                      {PEOPLE_OPTIONS.map((option) => (
                        <PeopleOption 
                          age={option.age} 
                          name={option.name} 
                          event={this.getInputValue}
                        />
                      ))}
                    </div>
                  </div>


                  <div className="option">
                    <span className="optionTitle">추가/옵션 선택</span>
                    <div className="miniOption">
                      {ADDITIONAL_OPTIONS.map((option) => (
                        <AdditionalOption 
                          img={option.img} 
                          title={option.title} 
                          info={option.info} 
                          desc={option.desc} 
                          name={option.name}
                          event={this.getOptionValue}
                        />
                      ))} 
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
                          <span className="priceNum">0</span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="priceCon">
                        <span className="priceCategory">추가옵션</span>
                        <div className="priceWon">
                          <span className="priceNum">0</span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="priceCon">
                        <span className="priceCategory">할인금액</span>
                        <div className="priceWon">
                          <span className="priceNum">0</span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="totalPriceCon">
                        <span className="priceCategory">총 결제금액</span>
                        <div className="">
                          <span className="totalPrice">1,863,000</span>
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
                  {/* <ReservationTerms/> */}
                  <div className="btnCon">
                    <button 
                      className="meaningBtn"
                      onClick={this.postReservationInfo}
                    >
                        결제하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Information />
        </div>
      </div>
    );
  }
}

export default Reservation;
