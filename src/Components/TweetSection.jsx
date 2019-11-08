import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TweetSection.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";

class TweetSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container className="mainContainer">
          <Row>
              <Col>
                <div className="tweeterTemplate">
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="CIRCLE2020"
                    options={{ height: 600 }}
                  />
                </div>
              </Col>

            <Col>
              <div className="activties">
                <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
                  <h2>Recent Activities</h2>

                  <li>
                    Anusha Fatima Makes Pakistan Proud at Global Tech
                    Competition in China
                  </li>
                  <li>
                    Tech Innovation comes to the forefront in Lahore when CIRCLE
                    introduces She Loves Tech at Plan9!
                  </li>
                  <li>
                    CIRCLE introduces She Loves Tech Pakistan Global Startup
                    Competition at NED University
                  </li>
                  <li>
                    Breaking Barriers: CIRCLE’s Report on Women’s
                    Entrepreneurship in Pakistan
                  </li>
                  <li>
                    CIRCLE Highlights Women Techpreneurs in Islamabad with
                    Startup Grind Islamabad for She Loves Tech Pakistan
                  </li>
                </ScrollAnimation>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

TweetSection.propTypes = {};

export default TweetSection;
