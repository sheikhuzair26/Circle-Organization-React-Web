import React, { Component } from "react";
import PropTypes from "prop-types";
import DropDowns from "./../DropDowns";
import "./GeneralDropDown.css";



class TechKaro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-dropdown">
        <DropDowns
          ListOne="About Tech Karo"
          ListOneURL="/AboutTechKaro"
          ListTwo="Lyari"
          ListTwoURL="/Lyari"
        />
      </div>
    );
  }
}

TechKaro.propTypes = {};

export default TechKaro;
