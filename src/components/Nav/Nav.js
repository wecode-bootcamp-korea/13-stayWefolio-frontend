import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const API = "http://localhost:3000/data/dataSSY/data.json";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      hotelList: [],
    };
  }

  componentDidMount() {
    fetch(API, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          hotelList: res.hotels,
          // place: res.hotelList.place, // fetch에서 어떻게 받아 와야 할지...?
          // type: res.hotelList.type,
        });
      });
  }

  handleSearchBar = (event) => {
    const { value } = event.target;
    this.setState({
      searchValue: value,
    });
  };

  searchHotel = (e) => {
    const { searchValue, searchHotel } = this.state;
    // 일단 console에 나오도록
  };

  render() {
    const { hotelList, searchValue } = this.state;

    return (
      <nav className="Nav">
        <div className="container">
          <div className="logoWrap">
            <img src="./images/logo.png" alt="logo" className="logo" />
          </div>
          <div className="navContainer">
            <div className="topLineWrap">
              <form className="searchBarWrap">
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={this.handleSearchBar}
                />
                <button className="searchBarBtn" onClick={this.searchHotel}>
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <div className="mediaIconsWrap">
                <ul className="mediaIcons">
                  <li className="facebook">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="naver">
                    <img
                      className="naverLogo"
                      src="./images/naverimg.png"
                      alt="naverlogo"
                    />
                  </li>
                  <li className="branch">
                    <img
                      className="branchLogo"
                      src="./images/branchimg.png"
                      alt="branchlogo"
                    />
                  </li>
                  <li className="youtube">
                    <a href="https://www.youtube.com/">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="loginWrap">
                <Link className="loginLink" to="/login">
                  LOGIN
                </Link>
                <span className="loginAnd">or</span>
                <Link className="signupLink" to="/signup">
                  REGISTER
                </Link>
              </div>
            </div>
            <ul className="bottomLineWrap">
              <li className="careby">
                <span className="carebyLink">CARE BY</span>
              </li>
              <li className="magazine">
                <span className="magazineLink">MAGAZINE</span>
              </li>
              <li className="pick">
                <Link to="/pick" className="pickLink">
                  PICK
                </Link>
              </li>
              <li className="promotion">
                <span className="promotionLink">PROMOTION</span>
              </li>
              <li className="preOrder">
                <span className="preOrderLink">PRE-ORDER</span>
              </li>
              <li className="booking">
                <span className="bookingLink">BOOKING</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
