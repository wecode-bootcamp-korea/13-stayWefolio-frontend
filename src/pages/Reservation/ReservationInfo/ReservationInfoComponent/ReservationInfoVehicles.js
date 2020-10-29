import React, { Component } from "react";
import "../ReservationInfo.scss";
import "../ReservationInfoComponent/ReservationInfoVehicles.scss";

class ReservationInfoVehicles extends Component {
  render() {
    const { infoTitle, first, second, third, fourth, fifth } = this.props;
    return (
      <div className="AgrInfoContainer">
        <p>{infoTitle}</p>
        <ol>
          <li>{first}</li>
          <li>{second}</li>
          <li>{third}</li>
          <li>{fourth}</li>
          <li>{fifth}</li>
        </ol>
      </div>
    );
  }
}

export default ReservationInfoVehicles;
