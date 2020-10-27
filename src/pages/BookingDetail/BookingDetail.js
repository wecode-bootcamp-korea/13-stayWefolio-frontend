import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BookingDetail.scss";
import RoomsSlider from "./BookingDetailComponent/RoomsSlider/RoomsSlider";

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

export class BookingDetail extends Component {
  constructor() {
    super();
    this.state = {
      roomInfoList: [],
      bottomInfoList: [],
    };
  }

  componentDidMount() {
    fetch(
      //`${API}/main/places/${this.props.match.params.id}`, // 동적 데이터 (수정 예정)
      "http://localhost:3000/data/bookingDetailData/roomInfoData.json"
      //"http://10.58.1.45:8000/main/places/1" //백 API 주소
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          roomInfoList: res.detail,
        });
      });
  }

  render() {
    const { roomInfoList, bottomInfoList } = this.state;
    console.log("룸 카운트", roomInfoList.room_count);

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
                  roomInfoList[0].rooms.map((roomInfo) => {
                    return (
                      <RoomsSlider
                        {...this.state}
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
        </div>
      </div>
    );
  }
}

export default BookingDetail;
