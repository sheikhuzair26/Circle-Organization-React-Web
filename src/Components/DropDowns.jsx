import React, { Component } from "react";
import "./DropDowns.css";
import PropType from "prop-types";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

class DropDowns extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <div className="container-passing-props">
          {this.props.ListOne ? (
            <li className="dropdown-list">
              <Link to={this.props.ListOneURL}>{this.props.ListOne}</Link>
            </li>
          ) : (
            <li></li>
          )}
          {this.props.ListTwo ? (
            <li className="dropdown-list">
              <Link to={this.props.ListTwoURL}>{this.props.ListTwo}</Link>
            </li>
          ) : (
            <li></li>
          )}
          {this.props.ListThree ? (
            <li className="dropdown-list">
              {" "}
              <Link to={this.props.ListThreeURL}>{this.props.ListThree}</Link>
            </li>
          ) : (
            <li></li>
          )}
          {this.props.ListFour ? (
            <li className="dropdown-list">{this.props.ListFour}</li>
          ) : (
            <li></li>
          )}
          {this.props.ListFive ? (
            <li className="dropdown-list">{this.props.ListFive}</li>
          ) : (
            <li></li>
          )}
        </div>
      </ScrollAnimation>
    );
  }
}

DropDowns.propTypes = {
  ListOne: PropType.object,
  ListTwo: PropType.object,
  ListThree: PropType.object,
  ListFour: PropType.object,
  ListFive: PropType.object
};

export default DropDowns;
