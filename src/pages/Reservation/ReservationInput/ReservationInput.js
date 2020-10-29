import React, { Component } from 'react';

import "./ReservationInput.scss"

class ReservationInput extends Component {
  handleInput = (event) => {
    const { name, value } = event.target;
    this.props.event(name, value);
  };
  
  render() {
    const { name, title, value } = this.props;
    return (
        <div className="ReservationInput">
          <span className="title">{title}</span>
          <input
            type="text"
            name={name}
            value={value}
            onChange={this.handleInput}
          />
        </div>
    );
  }
}

export default ReservationInput;