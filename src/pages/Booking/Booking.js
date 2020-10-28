import React, { Component } from "react";
import "../Booking/Booking.scss";

const API = "http://10.58.1.45:8000/main/banner";

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
              <img
                className="bannerImage"
                src={banner.thumbnail_url}
                alt="banner"
              />
              <div className="bannerTextContainer">
                <p className="bannerTopText hoverStyle">LAUNCHING EVENT</p>
                <p className="bannerTitle">{banner.name}</p>
                <p className="bannerDesc hoverStyle">{banner.introduction}</p>
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
