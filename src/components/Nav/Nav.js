import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.scss";

import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="lowerSide">
          <div className="container">
            <div className="logoWrap">
              <img src="./images/logo.png" alt="logo" className="logo" />
            </div>
            <div className="navContainer">
              <div className="topLineWrap">
                <form className="searchBarWrap">
                  <input type="text" className="searchBar" />
                  <button className="searchBarBtn">
                    <FontAwesomeIcon
                      classname="searchBarIcon"
                      icon={faSearch}
                    />
                  </button>
                </form>
                <div className="mediaIconsWrap">
                  <ul className="mediaIcons">
                    <li className="facebook">
                      <a href="https://www.facebook.com/">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className="naver"></li>
                    <li className="branch"></li>
                    <li className="youtube">
                      <a href="https://www.youtube.com/">
                        <FontAwesomeIcon icon={faYoutube} />
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
              <ul className="navbarList">
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
        </div>
      </nav>
    );
  }
}

export default Nav;
