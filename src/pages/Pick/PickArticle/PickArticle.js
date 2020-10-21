import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//import "@fortawesome/fontawesome-free/js/all.js";

import "./PickArticle.scss"

export class PickArticle extends Component {
  render() {
    return (
      <article className="PickArticle">
        <a href="/">
        <img alt="mainimg" src="https://s3.ap-northeast-2.amazonaws.com/stayfolio.images/system/pictures/images/000/056/218/medium/5aede287d43e0fa248825c78fd3cf1ae5880d4cd.jpg?1602836882" />
        </a>
        <div className="articleInfo">
          <div className="hotelName">
            <h4><a href>메이슨 파타야</a></h4>
            <span className="eng">Mason Pattaya</span>
          </div>
          <div className="bookingLink">
            <a href="/">BOOKING NOW</a>
          </div>
          <span>조용한 휴식이 필요하다면 찾게 되는 곳</span>
    
          <div className="infoCon">


            <div className="infoLine">
              <div className="con">
                <i className="fas fa-map-marker-alt"></i>
                <span>태국/파타야</span>
                <span className="centerLine">|</span>
              </div>
              <div className="con">
                <i class="fas fa-home"></i>
                <span>리조트</span>  
              </div>
            </div>

            <div className="infoLine">
              <div className="con">
                <i class="fas fa-coins"></i>
                <span>532,000~2,139,000</span>
                <span className="centerLine">|</span>
              </div>
              <div className="con">
                <i class="fas fa-star"></i>
                <span>휴식, 해외여행, 수영장</span>  
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default PickArticle;