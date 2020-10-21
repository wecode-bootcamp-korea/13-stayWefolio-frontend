import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//import "@fortawesome/fontawesome-free/js/all.js";

import "./PickArticle.scss"

export class PickArticle extends Component {
  render() {
    const { name, engName, desc, mainImg, location, type, minPrice, maxPrice, stars} = this.props;
    console.log(stars)
    return (
      <article className="PickArticle">
        <a href="/">
        <img alt="mainimg" src={mainImg} />
        </a>
        <div className="articleInfo">
          <div className="hotelName">
            <h4><a href>{name}</a></h4>
            <span className="eng">{engName}</span>
          </div>
          <div className="bookingLink">
            <a href="/">BOOKING NOW</a>
          </div>
          <span>{desc}</span>
    
          <div className="infoCon">
            <div className="infoLine">
              <div className="con">
                <i className="fas fa-map-marker-alt"></i>
                <span>{location}</span>
                <span className="centerLine">|</span>
              </div>
              <div className="con">
                <i class="fas fa-home"></i>
                <span>{type}</span>  
              </div>
            </div>

            <div className="infoLine">
              <div className="con">
                <i class="fas fa-coins"></i>
                <span>{minPrice}~{maxPrice}</span>
                <span className="centerLine">|</span>
              </div>
              <div className="con">
                <i class="fas fa-star"></i>
                <span>{stars.map((star)=>(star))}</span>  
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default PickArticle;