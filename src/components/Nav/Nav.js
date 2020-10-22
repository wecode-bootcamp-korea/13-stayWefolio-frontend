import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const brandLogos = [
  {
    id: "1",
    href: "https://www.facebook.com/",
    src: "./images/facebookimg.png",
    alt: "facebooklogo",
  },
  {
    id: "2",
    href: "https://www.instagram.com/",
    src: "./images/instaimg.png",
    alt: "instagramlogo",
  },
  {
    id: "3",
    href: "https://www.naver.com/",
    src: "./images/naverimg.png",
    alt: "naverlogo",
  },
  {
    id: "4",
    href: "https://brunch.co.kr/",
    src: "./images/branchimg.png",
    alt: "branchlogo",
  },
  {
    id: "5",
    href: "https://www.youtube.com/",
    src: "./images/youtubeimg.png",
    alt: "youtubelogo",
  },
];

const menus = [
  { id: "1", path: "/careby", classname: "careByLink", menu: "CARE BY" },
  { id: "2", path: "/magazine", classname: "magazineLink", menu: "MAGAZINE" },
  { id: "3", path: "/pick", classname: "pickLink", menu: "PICK" },
  {
    id: "4",
    path: "/promotion",
    classname: "promotionLink",
    menu: "PROMOTION",
  },
  { id: "5", path: "/preorder", classname: "preorderLink", menu: "PRE-ORDER" },
  { id: "6", path: "/booking", classname: "bookingLink", menu: "BOOKING" },
];

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="container">
          <div className="logoWrap">
            <img src="./images/logo.png" alt="logo" className="logo" />
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
                    <Link path={menu.path} className={menu.classname}>
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
