import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const API = "/data/dataSSY/navdata.json";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      searchValue: "",
      hotelList: [],
      result: [],
      brandLogos: [],
      menus: [],
      isToken: false,
    };
  }

  componentDidMount() {
    const tokenValid = localStorage.getItem("token");
    this.setState({ isToken: tokenValid });
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

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const tokenValid = localStorage.getItem("token");
      this.setState({ isToken: tokenValid });
    }
  }

  logOut = (e) => {
    const { isToken } = this.state;
    if (isToken) {
      localStorage.removeItem("token");
      this.setState({ isToken: false });
      e.preventDefault();
    }
  };

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
      this.setState({ isVisible: true, result: searchFilter });
    }
  };

  resetSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { searchValue, brandLogos, menus, isToken } = this.state;

    return (
      <nav className="Nav">
        <div className="container">
          <div className="logoWrap">
            <Link to="/">
              <img
                src={
                  this.props.location.pathname.includes("bookingDetail") ||
                  this.props.location.pathname.includes("reservation")
                    ? "../images/staywefolio_logo.png"
                    : "./images/staywefolio_logo.png"
                }
                alt="logo"
                className="logo"
              />
            </Link>
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
                          <img
                            src={
                              this.props.location.pathname.includes(
                                "bookingDetail"
                              ) ||
                              this.props.location.pathname.includes(
                                "reservation"
                              )
                                ? `.${logo.src}`
                                : `${logo.src}`
                            }
                            alt={logo.alt}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="loginWrap">
                <Link className="loginLink" to="/login">
                  {isToken ? "MyPage" : "LOGIN"}
                </Link>
                <span className="loginAnd">{isToken ? "/" : "or"}</span>
                <Link className="signupLink" to="/signup" onClick={this.logOut}>
                  {isToken ? "Logout" : "REGISTER"}
                </Link>
              </div>
            </div>
            <ul className="bottomLineWrap">
              {menus.map((menu) => {
                return (
                  <li key={menu.id}>
                    <Link
                      to={menu.path}
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
