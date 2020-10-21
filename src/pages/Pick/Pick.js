import React, { Component } from "react";
import PickArticle from "./PickArticle/PickArticle";

import "./Pick.scss"


export class Pick extends Component {
  constructor () {
    super();
    this.state = {
      hotelData : [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/pick_data.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          hotelData: res.pick_data
        });
      });
  }

  render() {
    const { hotelData } = this.state;
    return (
      <div className="Pick">
        <div className="container">

          <section>
            <div className="titleInfo">
              <span className="title">PICK</span><br></br>
              <span className="titleInfo">매일 하루 한번! 스테이폴리오가 추천합니다</span>  
            </div>
            <div className="searchContainer">
              <div className="searchfilter">
                <span>타입전체</span>
                <div className="point"></div>
              </div>
              <div className="searchfilter">
                <span>지역전체</span>
              </div>
              <div className="searchfilter">
                <span>금액전체</span>
              </div>
            </div>
          </section>
          <div className="articleCon">
            {hotelData.map((hotel) => (
              <PickArticle 
                name={hotel.name} 
                engName={hotel.engName} 
                desc={hotel.desc} 
                mainImg={hotel.mainImg} 
                location={hotel.location} 
                type={hotel.type} 
                minPrice={hotel.minPrice} 
                maxPrice={hotel.maxPrice} 
                stars={hotel.stars} 
              />
            ))}
          </div>
          <div className="pagination">
            <ul>
              <li>
                <a href="/">&#60;&#60;</a>
              </li>
              <li>
                <a href="/">&#60;</a>
              </li>
              <li>
                <a href="/">1</a>
              </li>
              <li>
                <a href="/">2</a>
              </li>
              <li>
                <a href="/">3</a>
              </li>
              <li>
                <a href="/">4</a>
              </li>
              <li>
                <a href="/">5</a>
              </li>
              <li>
                <a href="/">6</a>
              </li>
              <li>
                <a href="/">7</a>
              </li>
              <li>
                <a href="/">&#62;</a>
              </li>
              <li>
                <a href="/">&#62;&#62;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Pick;
