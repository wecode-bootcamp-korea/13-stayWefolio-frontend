import React, { Component } from "react";
import "../ReservationInfo.scss";
import "../ReservationInfoComponent/ReservationInfoVehicles.scss";

class ReservationInfoVehicles extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="AgrInfoContainer">
        <ol>
          {data.map((sentence) => (
            <li>{sentence}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ReservationInfoVehicles;
