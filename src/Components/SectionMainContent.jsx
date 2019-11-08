import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SectionMainContent.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class SectionMainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="main-container">
          <ScrollAnimation animateIn="lightSpeedIn" animateOut="lightSpeedOut">
            <h1>Circle Women</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn=" slideInUp">
            <p>
              Led by Sadaffe Abid, CIRCLE Pakistan’s mission is to advance
              women’s economic participation and empowerment through innovative
              entrepreneurship and leadership labs, advocacy campaigns and
              research. We develop and support the entrepreneurial and
              leadership capacity of women and youth in Pakistan to bring about
              economic growth and social change.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="lightSpeedIn" animateOut="lightSpeedOut">
            <h2>Areas of Work</h2>
          </ScrollAnimation>
          <ul>
            <ScrollAnimation animateIn=" slideInUp" animateOut="zoomOutDown">
              <li className="content-li">
                Leadership capacity building of women and youth in Pakistan
                through workshops, fellowship programmes, dialogues and
                mentoring
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn=" slideInUp" animateOut="zoomOutDown">
              <li className="content-li">
                Research and Advocacy to achieve women’s equal representation
                and access through building a knowledge base, campaigning &
                partnerships
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateIn=" slideInUp" animateOut="zoomOutDown">
              <li className="content-li">
                Entrepreneurship and social innovation through supporting
                women’s entrepreneurship and leadership in Pakistan and
                regionally
              </li>
            </ScrollAnimation>
          </ul>
        </section>
      </div>
    );
  }
}

SectionMainContent.propTypes = {};

export default SectionMainContent;
