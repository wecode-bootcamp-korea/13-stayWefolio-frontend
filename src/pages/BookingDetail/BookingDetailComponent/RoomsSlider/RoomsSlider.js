import React, { Component } from "react";
import RoomImgSlider from "../RoomsImgSlider/RoomsImgSlider";
import "./RoomsSlider.scss";
import "@fortawesome/fontawesome-free/js/all.js";

export class RoomsSlider extends Component {
  constructor() {
    super();
    this.state = {
      bottomInfoList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/bookingDetailData/roomBottomData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bottomInfoList: res.data,
        });
      });
  }

  render() {
    const { bottomInfoList } = this.state;
    const {
      roomCount,
      roomInfoList,
      roomName,
      roomType,
      roomIntroduction,
      checkIn,
      checkOut,
      minPeople,
      maxPeople,
      area,
      bedType,
      numberOfBeds,
      price,
      roomBed,
      roomTag,
      roomFacility,
      roomService,
      bottomInfo,
    } = this.props;

    return (
      <section className="RoomsSlider">
        <div className="roomsTop">
          <div className="roomsTopLeft">
            <i className="fas fa-circle"></i>
            <p>
              총 {roomInfoList[0] && roomInfoList[0].common_info.room_count}개
              룸
            </p>
          </div>
          <p className="roomsTopTitle">{roomName}</p>
          <div className="roomsTopRight"></div>
        </div>
        <div className="roomsContent">
          <RoomImgSlider {...this.props} />
          <div className="roomsRight">
            <div className="roomsRightTop">
              <p className="topTitle">{roomName}</p>
              <p className="topType">{roomType}</p>
              <p className="topDesc">{roomIntroduction}</p>
              <div className="topBottom">
                <div className="bottomLeft">
                  <ul>
                    <li>
                      체크인 {checkIn} / 체크아웃 {checkOut}
                    </li>
                    <li>
                      기준 인원 {minPeople} / 최대 인원 {maxPeople}
                    </li>
                    <li>객실면적 {area}</li>

                    {roomInfoList?.length &&
                      roomInfoList[0].rooms[0].bed.map((bed) => {
                        return (
                          <li>
                            {bed.bed_type} {bed.number_of_beds}
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="bottomRight">
                  {roomTag.length &&
                    roomTag.map((tag) => {
                      return <div className="featureBox">{tag}</div>;
                    })}
                </div>
              </div>
              <div className="roomPrice">{price}</div>
            </div>
            <button className="roomsRightBtn">Booking</button>
          </div>
        </div>

        <div className="roomsInfoContainer">
          <div className="infoLeft">
            <div className="leftTop">
              <p className="roomTitle">{roomName}</p>
              <p className="roomType">{roomType}</p>
            </div>
            <ul className="leftBottom">
              <li className="roomTime">
                체크인 {checkIn} / 체크아웃 {checkIn}
              </li>
              <li className="roomPerson">
                기준 인원 {minPeople} / 최대 인원 {maxPeople}
              </li>
              <li className="roomWidth">객실면적 {area}</li>

              {roomInfoList.length &&
                roomBed.map((bed) => {
                  return (
                    <li className="roomBed">
                      {bed.bed_type} {bed.number_of_beds}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="infoRight">
            <div className="roomDesc">{roomIntroduction}</div>
            <div className="rightBottom">
              <div className="rightContainer">
                <p className="infoTitleLeft">FACILITY</p>
                <ul className="iconList">
                  {roomFacility.length &&
                    roomFacility.map((_facility) => {
                      return (
                        <li className="infoIconContainer">
                          <img
                            className="iconStyle"
                            src={_facility.icon_url}
                            alt="facility icon"
                          />
                          <p className="iconDesc">{_facility.name}</p>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="rightContainer">
                <p className="infoTitleLeft">SERVICE</p>
                <ul className="iconList">
                  {roomService.length &&
                    roomService.map((_service) => {
                      return (
                        <li className="infoIconContainer">
                          <img
                            className="iconStyle"
                            src={_service.icon_url}
                            alt="facility icon"
                          />
                          <p className="iconDesc">{_service.name}</p>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="rightContainer">
                <p className="infoTitleLeft">AMENITY</p>
                <ul className="textListUl">
                  {bottomInfoList.length &&
                    bottomInfoList[0].amenity.map((amenity) => {
                      return <li className="textList">{amenity}</li>;
                    })}
                </ul>
              </div>
              <div className="rightContainer">
                <p className="infoTitleLeft">EQUIPMENT</p>
                <ul className="textListUl">
                  {bottomInfoList.length &&
                    bottomInfoList[0].equipment.map((equipment) => {
                      return <li className="textList">{equipment}</li>;
                    })}
                </ul>
              </div>
              <div className="rightContainer">
                <p className="infoTitleLeft">OPTIONS</p>
                <ul className="textListUl">
                  <li className="textList">인원규정</li>
                  <li className="textList">변상안내</li>
                  <li className="textList">금연안내</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RoomsSlider;
