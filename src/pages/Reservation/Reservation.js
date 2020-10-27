import React from "react";
import InfosContainer from "../Reservation/infosContainer/InfosContainer";

import "./Reservation.scss";

class Reservation extends React.Component {
  render() {
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

                <InfosContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
