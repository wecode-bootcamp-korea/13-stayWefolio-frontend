import React, { Component } from "react";

import "./Pick.scss"
import PickArticle from "./PickArticle/PickArticle";

export class Pick extends Component {
  render() {
    return (
      <div className="Pick">
        <div className="container">
          {/*<div className="styleLine"></div>*/}


          <section>
            <div>
              <span>PICK</span><br></br>
              <span>매일 하루 한번! 스테이폴리오가 추천합니다</span>  
            </div>
            <div className="searchContainer">
              <div className="searchType"></div>
              <div className="searchLocation"></div>
              <div className="searchPrice"></div>
            </div>
          </section>
          <div className="articleCon">
            <PickArticle/>
            <PickArticle/>
            <PickArticle/>
            <PickArticle/>
            <PickArticle/>
            <PickArticle/>
          </div>
        </div>
      </div>
    );
  }
}

export default Pick;
