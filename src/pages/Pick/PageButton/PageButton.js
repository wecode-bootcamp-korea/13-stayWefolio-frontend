import React, { Component } from "react";

import "./PageButton.scss"

export class PageButton extends Component {
 
  getTargetPage = () => {
    this.props.getPageNum(this.targetPage.innerText);
    this.props.pagingNum(this.targetPage.innerText);
  }

  render() {
    const { pageNum, id, clicked } = this.props;

    return (
        <li 
          className={clicked}
          onClick={this.getTargetPage}
        >
          <span
            id={id}
            ref={(ref)=>this.targetPage=ref}
          >{pageNum}</span>
        </li>
    );
  }
}

export default PageButton;
