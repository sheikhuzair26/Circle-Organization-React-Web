import React, { Component } from "react";
import "./Header.css";
import logo from "./../Assets/Images/circleLogo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <Link to={"/Home"}>
              <img className="main-logo" src={logo} alt="Logo" />
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
