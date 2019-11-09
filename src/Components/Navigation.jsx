import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navigation.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-navigator">
        <div className="nav-area">
          <input type="checkbox" className="hamburger-menu" />

          <div className="nav-icon">
            <div></div>
          </div>
          <div className="main-menu">
            <div>
              <div>
                <ul>
                  <li className="nav-li">
                    <Link to="/Global">GLOBAL</Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/Pakistan">PAKISTAN</Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/Elevate">ELEVATE</Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/SheLovesTech">SHE LOVES TECH</Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/TechKaro">TECH KARO</Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/Offerings">OFFERINGS</Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/ClientsAndPartners">CLIENTS & PARTNERS</Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/Engage">ENGAGE</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

Navigation.propTypes = {};

export default Navigation;
