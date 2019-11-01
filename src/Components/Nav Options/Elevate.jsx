import React, { Component } from "react";
import PropTypes from "prop-types";
import DropDowns from "./../DropDowns";
import "./GeneralDropDown.css";

class Elevate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-dropdown">
        <DropDowns
          ListOne="About Elevate"
          ListTwo="Customized Leadership Programs"
          ListThree="Closing Ceremony"
          ListFour="Partners"
        />
      </div>
    );
  }
}

Elevate.propTypes = {};

export default Elevate;
