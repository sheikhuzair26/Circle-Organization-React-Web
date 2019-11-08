import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AboutUs.css";

class RatingsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <p className="rating" id ="ratingNumb" >{this.props.stat} </p>
        <h3 className="rating-tag">{this.props.startups}</h3>
      </div>
    );
  }
}

RatingsComponent.propTypes = {};

export default RatingsComponent;
