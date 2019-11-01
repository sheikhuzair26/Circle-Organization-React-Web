import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MainFooter.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
// import {Footer} from 'react-materialize';



class MainFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Footer">
          
        
            <div className="designBy">
                2019 Circle Women <i class="fas fa-heart"></i> Design by Sheikh Uzair
            </div>

            <div className="socials">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-google-plus-g"></i>
            </div>

        

      </div>
    );
  }
}

MainFooter.propTypes = {};

export default MainFooter;
