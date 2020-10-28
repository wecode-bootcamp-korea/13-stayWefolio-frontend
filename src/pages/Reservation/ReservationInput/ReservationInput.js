import React, { Component } from 'react';

import "./ReservationInput.scss"

class ReservationInput extends Component {
  handleInput = (event) => {
    const { name, value } = event.target;
    this.props.event(name, value);
  };
  
  render() {
    const { name, title } = this.props;
    return (
        <div className="ReservationInput">
          <span className="title">{title}</span>
          <input
            type="text"
            name={name}
            onChange={this.handleInput}
          ></input>
        </div>
    );
  }
}

export default ReservationInput;