import React, { Component } from "react";
import BookingBanner from "../Booking/BookingComponent/BookingBanner";
import "../Booking/Booking.scss";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

const API = "http://localhost:3000/data/mainData/mainBannerData.json";
const style = {
  height: 400,
};

export class Booking extends Component {
  constructor() {
    super();
    this.state = {
      bookingBannerList: [],
      hover: false,
      // items: Array.from({ length: 3 }),
    };
  }

  // fetchMoreData = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items.concat(Array.from({})),
  //     });
  //   }, 1500);
  // };

  componentDidMount = () => {
    // e.preventDefault();
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bookingBannerList: res.data,
        });
      });
  };
  render() {
    const { bookingBannerList } = this.state;

    return (
      <div className="Booking">
        <div className="navWrap">
          <nav></nav>
        </div>
        <header></header>
        <div className="bookingBoard">
          {/*...bannerSettings */}
          {bookingBannerList.map((banner) => (
            <div className="bannerBox">
              <img className="bannerImage" src={banner.image} alt="banner" />
              <div className="bannerTextContainer">
                <p className="bannerTopText hoverStyle">LAUNCHING EVENT</p>
                <p className="bannerTitle">{banner.hotelName}</p>
                <p className="bannerDesc hoverStyle">{banner.desc}</p>
                <button className="bannerBtn hoverStyle">SHOW NOW</button>
              </div>
            </div>
          ))}
        </div>
        <div className="footerWrap">
          <footer></footer>
        </div>
      </div>
    );
  }
}
export default Booking;
