import React, { Component } from "react";
import "../ReservationInfo.scss";
import "../ReservationInfoComponent/ReservationInfoVehicles.scss";
// import "../ReservationJY.scss";
// import "../ReservationJYcomponent/ReservationVehicles.scss";

class ReservationInfoToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  render() {
    var { title, children } = this.props;
    const { opened } = this.state;

    return (
      <div className={opened ? "Toggle clickedToggle" : "Toggle hideToggle"}>
        {" "}
        <div className="moreTextBox">
          <button className="moreBtn" onClick={this.toggleBox}>
            <span className="moreTitle">자세히보기</span>
            <i className="fas fa-angle-down"></i>
            {opened && <div>{children}</div>}
          </button>
        </div>
      </div>
    );
  }
}

export default ReservationInfoToggle;
