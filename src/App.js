import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import SectionMainContent from "./Components/SectionMainContent";
import Navigation from "./Components/Navigation";
import TweetSection from "./Components/TweetSection";
import MainFooter from "./Components/MainFooter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Global from "./Components/Nav Options/Global";
import Pakistan from "./Components/Nav Options/Pakistan";
import Elevate from "./Components/Nav Options/Elevate";
import SheLovesTech from "./Components/Nav Options/SheLovesTech";
import TechKaro from "./Components/Nav Options/TechKaro";
import Offerings from "./Components/Nav Options/Offerings";
import ClientsAndPartners from "./Components/Nav Options/ClientsAndPartners";
import Engage from "./Components/Nav Options/Engage";
import React, { Component } from "react";
import AboutTechKaro from "./Components/Nav Options/Nav Lists/AboutTechKaro";
import Lyari from "./Components/Nav Options/Nav Lists/Lyari";
import AboutUs from "./Components/Nav Options/Nav Lists/AboutUs";
import SltJourney from "./Components/Nav Options/Nav Lists/SltJourney";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Global">
              <Global />
            </Route>
            <Route path="/Pakistan">
              <Pakistan />
            </Route>
            <Route path="/Elevate">
              <Elevate />
            </Route>
            <Route path="/SheLovesTech">
              <SheLovesTech />
            </Route>
            <Route path="/TechKaro">
              <TechKaro />
            </Route>
            <Route path="/Offerings">
              <Offerings />
            </Route>
            <Route path="/ClientsAndPartners">
              <ClientsAndPartners />
            </Route>
            <Route path="/Engage">
              <Engage />
            </Route>
            {/* inner lists */}

            <Route path="/AboutTechKaro">
              <AboutTechKaro />
            </Route>
            <Route path="/Lyari">
              <Lyari />
            </Route>
            {/* SheLovesTech */}
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            {/* SLT Journey */}
            <Route path="/SltJourney">
              <SltJourney />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
