import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

import "./Nav.scss";

const API = "/data/dataSSY/navdata.json";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      hotelList: [],
      result: [],
      brandLogos: [],
      menus: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          hotelList: res.data,
          brandLogos: res.brandLogos,
          menus: res.menus,
        });
      });
  }

  handleSearchBar = (event) => {
    const { value } = event.target;
    this.setState({
      searchValue: value,
    });
  };

  searchHotel = (event) => {
    const { searchValue, hotelList } = this.state;
    if (event.key === "Enter" || (event.target.name = "searchBtn")) {
      let searchFilter = hotelList.filter((hotel) => {
        const flattedArr = hotel.tags.flatMap((tag) => tag.split(" "));
        const isIncludeLocation = hotel.location.includes(searchValue);
        const isIncludeTag = flattedArr.includes(searchValue);
        if (isIncludeLocation || isIncludeTag) {
          return hotel;
        }
        return null;
      });
      this.setState({ result: searchFilter });
    }
  };

  resetSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { searchValue, brandLogos, menus } = this.state;
    return (
      <nav className="Nav">
        <div className="container">
          <div className="logoWrap">
            <img
              src="./images/staywefolio_logo.png"
              alt="logo"
              className="logo"
            />
          </div>
          <div className="navContainer">
            <div className="topLineWrap">
              <form className="searchBarWrap" onSubmit={this.resetSubmit}>
                <input
                  className="searchBar"
                  name="searchKeyWord"
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={this.handleSearchBar}
                  onKeyUp={this.searchHotel}
                />
                <button
                  className="searchBarBtn"
                  name="searchBtn"
                  type="button"
                  onClick={this.searchHotel}
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <div className="mediaIconsWrap">
                <ul className="mediaIcons">
                  {brandLogos.map((logo) => {
                    return (
                      <li key={logo.id}>
                        <a href={logo.href}>
                          <img src={logo.src} alt={logo.alt} />
                        </a>
                      </li>
                    );
                  })}
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
              {menus.map((menu) => {
                return (
                  <li key={menu.id}>
                    <Link
                      path={menu.path}
                      className={
                        menu.menu.includes("BOOKING")
                          ? "menuLink booking"
                          : "menuLink"
                      }
                    >
                      {menu.menu}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;