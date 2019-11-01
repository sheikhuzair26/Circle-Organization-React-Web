import React, { Component } from "react";
import PropTypes from "prop-types";
import DropDowns from "./../DropDowns";
import "./GeneralDropDown.css";

class Global extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = false;

    return (
      <div className="container-dropdown">
        <DropDowns
          ListOne="Founders"
          ListTwo="The Circle Story"
          ListThree="Themes"
          ListFour="Men As Allies"
          ListFive={style ? " list " : null}
        />
      </div>
    );
  }
}

Global.propTypes = {};

export default Global;
