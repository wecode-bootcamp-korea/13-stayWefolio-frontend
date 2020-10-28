import React, { Component } from "react";
import "../Booking/Booking.scss";

const API = "http://10.58.1.45:8000/main/banner";

export class Booking extends Component {
  constructor() {
    super();
    this.state = {
      bookingBannerList: [],
      hover: false,
    };
  }

  componentDidMount = () => {
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
        {/* <div className="navWrap">
          <nav></nav>
        </div> */}
        <header></header>
        <div className="bookingBoard">
          {bookingBannerList.map((banner) => (
            <div className="bannerBox">
              <img
                className="bannerImage"
                src={banner.thumbnail_url}
                alt="banner"
              />
              <div className="bannerTextContainer">
                <p className="bannerTopText noneStyle">LAUNCHING EVENT</p>
                <p className="bannerTitle">{banner.name}</p>
                <p className="bannerDesc noneStyle">{banner.introduction}</p>
                <button className="bannerBtn noneStyle">SHOW NOW</button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="footerWrap">
          <footer></footer>
        </div> */}
      </div>
    );
  }
}
export default Booking;
