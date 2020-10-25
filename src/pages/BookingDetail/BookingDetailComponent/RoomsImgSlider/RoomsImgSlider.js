import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RoomImgSlider.scss";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <i class="fas fa-angle-right"></i>
    ) : (
      <i class="fas fa-angle-left"></i>
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

const roomsImgSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  autoplay: false,
};

export class RoomImgSlider extends Component {
  render() {
    return (
      <section className="RoomImgSlider">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />

        <div className="roomsImgContainer">
          <Slider
            {...roomsImgSettings}
            className="imgSliderContainer"
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
          >
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
