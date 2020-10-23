import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RoomImgSlider.scss";
import "@fortawesome/fontawesome-free/js/all.js";

const roomsImgSettings = {
  dots: true,
  infinite: true,
  speed: 0,
  slidesToShow: 1,
  arrows: (
    <button type="button" class="slick-prev pull-left">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </button>
  ),
  nextArrow: (
    <button type="button" class="slick-next pull-right">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </button>
  ),
};

export class RoomImgSlider extends Component {
  render() {
    return (
      <section className="RoomImgSlider">
        <div className="roomsImgContainer">
          <Slider {...roomsImgSettings} className="imgSliderContainer">
            <img
              className="roomsImg"
              src="https://images.unsplash.com/photo-1551286923-c82d6a8ae079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80"
              alt="room"
            ></img>
            <img
              className="roomsImg"
              src="https://images.unsplash.com/photo-1581974206967-93856b25aa13?ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80"
              alt="room"
            ></img>
            <img
              className="roomsImg"
              src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
              alt="room"
            ></img>
          </Slider>
        </div>
      </section>
    );
  }
}

export default RoomImgSlider;
