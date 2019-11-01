import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Slider from "./Slider";
import SectionMainContent from "./SectionMainContent";
import Navigation from "./Navigation";
import TweetSection from "./TweetSection";
import MainFooter from "./MainFooter";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="parallaxOne">
          <Header />
          <Navigation />
          <Slider />
        </div>
        <div class="parallaxTwo">
          <SectionMainContent />
        </div>
        <div className="parallaxThree">
          <TweetSection />
        </div>
        <MainFooter />
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
