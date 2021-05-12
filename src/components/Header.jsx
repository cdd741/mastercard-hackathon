import React from "react";
import logo from "../assets/logo.svg";
import slider from "../assets/sliderIcon.svg";
import profilePic from "../assets/profilePic.svg";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header-links">
            <img className="header__profile" src={profilePic} alt="" />
          </div>
          <div className="header-links">
            <img className="header__logo" src={logo} alt="" />
          </div>
          <div className="header-links">
            <img className="header__slider" src={slider} alt="" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
