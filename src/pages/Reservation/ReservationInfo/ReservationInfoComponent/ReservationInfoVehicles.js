import React, { Component } from "react";
import "../ReservationInfo.scss";
import "../ReservationInfoComponent/ReservationInfoVehicles.scss";
// import "../ReservationJY.scss";
// import "../ReservationJYcomponent/ReservationVehicles.scss";

class ReservationInfoVehicles extends Component {
  render() {
    return (
      <div className="AgrInfoContainer">
        <p>{this.props.infoTitle}</p>
        <ol>
          <li>{this.props.first}</li>
          <li>{this.props.second}</li>
          <li>{this.props.third}</li>
          <li>{this.props.fourth}</li>
          <li>{this.props.fifth}</li>
        </ol>
      </div>
    );
  }
}

export default ReservationInfoVehicles;
