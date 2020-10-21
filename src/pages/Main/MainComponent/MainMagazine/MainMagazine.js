import React, { Component } from "react";
import "./MainMagazine.scss";

export class MainMagazine extends Component {
  constructor() {
    super();
    this.state = {
      magazineList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/mainData/mainMagazineData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          magazineList: res.data,
        });
      });
  }

  render() {
    return (
      <div className="mainMagazine">
        <div classname="magazineContainer">
          {this.state.magazineList.map((el) => (
            <section className="magazineContainer">
              <div className="magazineLeft">
                <img className="magazineImg" src={el.image} alt="magazine" />
              </div>
              <div className="magazineRight">
                <div className="magazineTextContainer">
                  <div className="textTop">
                    <a className="magHotelName">{el.hotelName}</a>
                    <p className="magTopTxt magType">
                      {el.type}
                      <span className="magTopTxt magLocation">
                        {"ㅣ"}
                        {el.location}
                      </span>
                    </p>
                  </div>
                  <div className="textBottom">
                    <p className="descTitle">{el.descTitle}</p>
                    <p className="desc">{el.desc}</p>
                    <p className="magBtn">SHOW MORE +</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }
}

export default MainMagazine;
