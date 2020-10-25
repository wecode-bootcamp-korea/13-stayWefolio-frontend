import React, { Component } from "react";
import "../Signup.scss";

class Toggle extends React.Component {
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
      <div
        className={
          this.state.opened
            ? "moreInfoContent clickedBtn"
            : "moreInfoContent hideBtn"
          // opened가 true 면 moreInfoContent만 보여주고,
          // opened가 false 면 moreInfoContent hideBtn 보여준다.
        }
      >
        {" "}
        <div className="moreTextBox">
          <button className="moreBtn" onClick={this.toggleBox}>
            <span className="moreTitle clicked">자세히보기</span>
            <i className="fas fa-angle-down"></i>
            {opened && <div>{children}</div>}
          </button>
        </div>
      </div>
    );
  }
}

export default Toggle;
