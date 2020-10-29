import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BookingDetail.scss";
import RoomsSlider from "./BookingDetailComponent/RoomsSlider/RoomsSlider";
import MapContent from "./BookingDetailComponent/Map/MapContent";
import { API } from "../../../src/config";

const slickRoomsSettings = {
  infinite: true,
  speed: 0,
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 2500,
  arrows: true,
  draggable: false,
  dots: true,
};

const mockAPI =
  "http://localhost:3000/data/bookingDetailData/roomInfoData.json";

export class BookingDetail extends Component {
  constructor() {
    super();
    this.state = {
      roomInfoList: [],
      bottomInfoList: [],
    };
  }

  //`${API}/main/places/1`
  componentDidMount() {
    fetch(mockAPI)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          roomInfoList: res.detail,
        });
      });
  }

  render() {
    const { roomInfoList, bottomInfoList } = this.state;

    return (
      <div className="BookingDetail">
        <section className="banner">
          <img
            className="bannerImg"
            alt="hotel"
            src={roomInfoList[0] && roomInfoList[0].common_info.hotel_image_url}
          />
          <div className="bannerTitle">
            <p className="titleText">
              {roomInfoList[0] &&
                roomInfoList[0].common_info.hotel_english_name}
            </p>
          </div>
        </section>
        <div className="container">
          <section className="rooms">
            <header className="roomsHeader">
              <p className="roomsTitle">
                <span className="titleSpan">OUR</span> ROOMS
              </p>
              <p className="titleBottom">
                {roomInfoList[0] &&
                  roomInfoList[0].common_info.hotel_introduction}
              </p>
            </header>
            <div className="roomsContainer">
              <Slider {...slickRoomsSettings} className="sliderWrapper">
                {roomInfoList.length &&
                  roomInfoList[0].rooms.map((roomInfo, idx) => {
                    return (
                      <RoomsSlider
                        {...this.state}
                        key={idx}
                        roomCount={roomInfo.room_count}
                        roomName={roomInfo.room_name}
                        roomType={roomInfo.room_type}
                        roomIntroduction={roomInfo.room_introduction}
                        price={roomInfo.price}
                        checkIn={roomInfo.checkin_time}
                        checkOut={roomInfo.checkout_time}
                        minPeople={roomInfo.min_people}
                        maxPeople={roomInfo.max_people}
                        area={roomInfo.area}
                        roomImg={roomInfo.room_image}
                        roomBed={roomInfo.bed}
                        roomTag={roomInfo.tags}
                        roomFacility={roomInfo.facility}
                        roomService={roomInfo.service}
                      />
                    );
                  })}
              </Slider>
            </div>
          </section>
          <div className="mapContainer">
            <p className="mapTitle">LOCATION</p>
            <div className="mapContent">
              <MapContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingDetail;
