import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const API = "http://localhost:3000/data/navdata/navdata.json";

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
          hotelList: res.data,
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
    const { searchValue, hotelList } = this.state;
    // 일단 console에 나오도록
    let count = 0;
    for (const hotel of hotelList) {
      if (
        hotel.location.includes(searchValue) ||
        hotel.tags.includes(searchValue)
      ) {
        count = count + 1;
      }
    }

    if (count === 0 || searchValue === "") {
      return console.log(`${searchValue} 검색결과가 없습니다.`);
    } else {
      return console.log(`${searchValue}이(가) ${count}개 있습니다.`);
    }
    // e.preventDefault();
  };

  render() {
    // console.log(this.state.hotelList);
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
                <button
                  className="searchBarBtn"
                  type="button"
                  onClick={this.searchHotel}
                >
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
