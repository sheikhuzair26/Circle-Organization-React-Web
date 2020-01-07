import React from "react";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import WomenEmpowerOne from "../../../Assets/Images/womenempower.jpg";
import WomenEmpowerTwo from "../../../Assets/Images/women2.jpg";
import WomenEmpowerThree from "../../../Assets/Images/women3.jpg";
import Rating from "../Nav Lists/RatingsComponent";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Header from "../../Header";
import Navigation from "../../Navigation";

const AboutUs = () => {
  return (
    <div className="AboutMainSection">
      <div className="AboutSection">
        <Header />
        <Navigation />
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <Carousel>
            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={WomenEmpowerOne}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={WomenEmpowerTwo}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={WomenEmpowerThree}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </ScrollAnimation>
      </div>

      <div className="about-content">
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <h2>About Us</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <p>
            She Loves Tech is a global competition which showcases the
            convergence of the latest trends in technology, entrepreneurship,
            innovation and the opportunities it creates for women. Today, it is
            the world’s largest women and tech start-up competition.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <p>
            CIRCLE is She Loves Tech’s official partner for Pakistan, since
            2017. Over the years we have received more than 400 applications
            from women-led start-ups from across Pakistan, with regional rounds
            in various cities including Karachi, Islamabad, Lahore, Abbottabad
            and Peshawar.
          </p>
        </ScrollAnimation>
      </div>

      <div className="numberCounter">
        <div className="main-container-numb">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <div className="head">
              <h2>She Loves Tech in Numbers</h2>
            </div>
          </ScrollAnimation>
          <div className="container-box">
            <div className="countDown">
              <ScrollAnimation animateIn=" rotateIn" animateOut="flipOutX">
                <Rating stat="1000+" startups="GLOBAL STARTUP'S" />
              </ScrollAnimation>
              <ScrollAnimation animateIn=" rotateIn" animateOut="flipOutX">
                <Rating stat="400+" startups="LOCAL SIGNUP'S" />
              </ScrollAnimation>
              <ScrollAnimation animateIn=" rotateIn" animateOut="flipOutX">
                <Rating stat="500M+" startups="GLOBAL MEDIA IMPRESSION'S" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
