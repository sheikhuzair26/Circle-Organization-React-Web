import React, { Component } from "react";
import PropTypes from "prop-types";
import DropDowns from "./../DropDowns";
import "./GeneralDropDown.css";


class Engage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-dropdown">
        <DropDowns
          ListOne="Contact Us"
          ListTwo="Take Part in Our Listening Tour"
          ListThree="Intern"
        />
      </div>
    );
  }
}

Engage.propTypes = {};

export default Engage;
