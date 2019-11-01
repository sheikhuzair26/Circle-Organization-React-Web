import React, { Component } from "react";
import PropTypes from "prop-types";
import DropDowns from "./../DropDowns";
import "./GeneralDropDown.css";

class ClientsAndPartners extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-dropdown">
        <DropDowns ListOne="Clients" ListTwo="Board of Partners" />
      </div>
    );
  }
}

ClientsAndPartners.propTypes = {};

export default ClientsAndPartners;
