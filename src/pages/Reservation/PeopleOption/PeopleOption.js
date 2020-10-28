import React, { Component } from 'react';

import "./PeopleOption.scss"

const OPTIONS = [
  { id: 1, value: 0, description: "0명" },
  { id: 2, value: 1, description: "1명" },
  { id: 3, value: 2, description: "2명" },
];

class PeopleOption extends Component {

  handleInput = (event) => {
    const { name, value } = event.target;
    this.props.event(name, value);
  };

  render() {
    const { age, name } = this.props;

    return (
      <div className="PeopleOption">
        <span>{age}</span>
        <select
          name={name}
          onChange={this.handleInput}
        >
          {OPTIONS.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.description}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default PeopleOption;