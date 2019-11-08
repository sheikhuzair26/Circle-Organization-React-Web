import React, { Component } from "react";
import PropTypes from "prop-types";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import SlideOne from "../Assets/Images/girls.jpg";
import SlideTwo from "../Assets/Images/award.jpg";
import SlideThree from "../Assets/Images/bejing.jpg";
import SlideFour from "../Assets/Images/girls 3.jpg";
import SlideFive from "../Assets/Images/elevate.jpg";
import SlideSix from "../Assets/Images/sheeeelovesback.jpg";

import "./Slider.css";
class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <Carousel>
            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={SlideSix}
                alt="Six slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={SlideOne}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={SlideTwo}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={SlideThree}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={SlideFour}
                alt="Four slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={SlideFive}
                alt="Five slide"
              />
            </Carousel.Item>
          </Carousel>
        </ScrollAnimation>
      </div>
    );
  }
}

Slider.propTypes = {};

export default Slider;
