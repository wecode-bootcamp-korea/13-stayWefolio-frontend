import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { withRouter } from "react-router-dom";
import "./CheckPage.scss";
import { API } from "../../../src/config";


class CheckPage extends Component {
  constructor() {
    super();
    this.state = {
      bookingInfo: [],
      adultCount: 0,
      childCount: 0,
      InfantCount: 0,
      TOKEN:localStorage.getItem("token")
    };
  }

  goToMain = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    const { data } = this.props.location;
    const { TOKEN } = this.state;
    console.log(data)
    fetch(
      // "http://localhost:3000/data/checkPageData/bookingData.json"
      `${API}/booking/confirmation?booking_id=${data}`, {
        headers: {
          Authorization: TOKEN
        },
      })
      .then((res) => res.json())
      .then((res) => {
        console.log("ghddd")
        const { booking_info } = res;

        this.setState({
          bookingInfo: booking_info,
          adultCount: Number(booking_info[0].adult),
          childCount: Number(booking_info[0].child),
          infantCount: Number(booking_info[0].infant),
        });
      });
  }

  render() {
    console.log()
    const { bookingInfo, adultCount, childCount, infantCount } = this.state;

    return (
      <section className="CheckPage">
        <div
          className="checkContainer"
          style={{
            backgroundImage: `url(${bookingInfo[0]?.hotel_image})`,
          }}
        >
          <div className="darken"></div>
          <div className="checkContent">
            <p className="checkText">
              <span className="bolder1">{bookingInfo[0]?.name}</span> 님,
              감사합니다.
              <br />
              <br />
              <span className="bolder2">
                {bookingInfo[0]?.hotel_name}, {bookingInfo[0]?.room_name}
                <br /> {adultCount !== 0 && `성인 ${adultCount}명 `}
                {childCount !== 0 && `/ 아동 ${childCount}명 `}
                {infantCount !== 0 && `/ 유아 ${infantCount}명 `}
                <br />
                {bookingInfo[0]?.date_from.slice(0, 4)}년{" "}
                {bookingInfo[0]?.date_from.slice(5, 7)}월{" "}
                {bookingInfo[0]?.date_from.slice(8, 10)}일 -{" "}
                {bookingInfo[0]?.date_to.slice(5, 7)}월{" "}
                {bookingInfo[0]?.date_to.slice(8, 10)}일
                <br />
                <br />
              </span>{" "}
              예약이 완료되었습니다.
            </p>
            <button className="goToMainBtn" onClick={this.goToMain}>
              MAIN으로 이동
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default CheckPage;
