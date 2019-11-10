import React from "react";
import "./Lyari.css";
import Header from "../../Header";
import Navigation from "../../Navigation";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Lyari = () => {
  return (
    <div>
      <div className="LyariMain">
        <Header />
        <Navigation />
        <div className="container-main">
          <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
            <h1 className="Lyari-head">LYARIsda</h1>
          </ScrollAnimation>
          <p className="Lyari-para">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              Circle’s Tech Karo initiative in Lyari aims to provide Digital
              Marketing Skills to young women from underserved communities to
              help them become freelancers.
            </ScrollAnimation>
          </p>
          <p className="Lyari-para">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              The aim is to bridge the digital gender and economic divide and
              leverage the power of technology for economic transformation of
              families and communities. Locals say that there are more than 70
              community centers within Lyari, however not a single one opens
              doors for women. By setting up a digital literacy class not only
              CIRCLE aims to make them freelancers so that they can become
              financially stable but also create a safe space where women are
              welcomed, can learn skills and grow.
            </ScrollAnimation>
          </p>

          <ul>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <li className="lyari-li">
                Digital Marketing course at Lyari Girls Cafe
              </li>
              <li className="lyari-li">4 month program</li>
              <li className="lyari-li">Cohort of 48 girls</li>
            </ScrollAnimation>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lyari;
