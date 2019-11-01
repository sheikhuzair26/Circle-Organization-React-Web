import React, { Component } from "react";
import "./Header.css";
import logo from "./../Assets/Images/circleLogo.png";
import sheloveslogo from "./../Assets/Images/sheloveslogo.png";

class Header extends Component {

  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img className="main-logo" src={logo} alt="Logo" />
          </div>
          <div className="sheLovesLogo">
            {/* <img className="she" src={sheloveslogo} alt="Love" /> */}
          </div>

          <div className="navigation">{/* <i class="fas fa-bars"></i> */}</div>
        </header>
      </div>
    );
  }
}

export default Header;
