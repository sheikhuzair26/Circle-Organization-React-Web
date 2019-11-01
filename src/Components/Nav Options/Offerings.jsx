import React, { Component } from "react";
import PropTypes from "prop-types";
import DropDowns from "./../DropDowns";
import "./GeneralDropDown.css";

class Offerings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-dropdown">
        <DropDowns
          ListOne="Women Entrepreneurship"
          ListTwo="Tech2empower"
          ListThree="Circle Youth Campus Chapters "
          ListFour="Workshops, Key Notes And Panels"
          ListFive="Inclusivity Consulting"
        />
      </div>
    );
  }
}

Offerings.propTypes = {};

export default Offerings;
