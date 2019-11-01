import React, { Component } from "react";
import PropTypes from "prop-types";
import DropDowns from "./../DropDowns";
import "./GeneralDropDown.css";

class SheLovesTech extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-dropdown">
        <DropDowns
          ListOne="About Us"    ListOneURL = "/AboutUs"
          ListTwo="Our History" ListTwoURL = "/OurHistory"
          ListThree="SLT Journey" ListThreeURL = "/SltJourney"
        />
      </div>
    );
  }
}

SheLovesTech.propTypes = {};

export default SheLovesTech;
