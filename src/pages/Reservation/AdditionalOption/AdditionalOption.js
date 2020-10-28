import React, { Component } from 'react';

import "./AdditionalOption.scss";

class AdditionalOption extends Component {
  handleOption = (event) => {
    const { name } = event.target

    // const { name } = event.target;
    // const isChecked = event.currentTarget.value === "true" ? true : false;
    this.props.event(name, event.target.value)
  };

  render() {
    const { img, title, info, desc, name } = this.props;

    return (
      <div className="AdditionalOption">
        <div className="optionCon">
          <img src={img} />
          <span className="title">{title}</span>
          <span className="info">{info}</span>
        </div>
        <p>
          {desc}
        </p>
        <div className="checkBoxs">
          (필수)
          <label className="check" htmlFor="check">
            <input
              type="radio"
              value="true"
              name={name}
              onChange={this.handleOption}
            />
            선택
          </label>
          <label className="check" htmlFor="uncheck">
            <input
              type="radio"
              value="false"
              name={name}
              onChange={this.handleOption}
            />
            선택하지 않음
          </label>
        </div>
      </div>
    );
  }
}

export default AdditionalOption;
