import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const API = "/data/dataSSY/navdata.json";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      brandLogos: [],
      menus: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          brandLogos: res.brandLogos,
          menus: res.menus,
        });
      });
  }

  render() {
    const { brandLogos, menus } = this.state;
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
              <form className="searchBarWrap">
                <input className="searchBar" type="text" placeholder="Search" />
                <button className="searchBarBtn">
                  <i class="fas fa-search"></i>
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
