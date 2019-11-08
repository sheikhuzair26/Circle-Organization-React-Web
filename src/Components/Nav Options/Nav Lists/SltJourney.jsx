import React from "react";
import "./SltJourney.css";
import "./AboutUs.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import SltphotoOne from "../../../Assets/Images/sltgroup2.jpg";
import mainCover from "../../../Assets/Images/colourfull.jpg";
import Award from "../../../Assets/Images/award.jpg";
import Rating from "../Nav Lists/RatingsComponent";

const SltJourney = () => {
  return (
    <div className="main-sec">
      <div className="JourneySection">
        <ScrollAnimation animateIn=" slideInUp">
          <div className="content">
            <h1 className="journey-head">OUR JOURNEY</h1>

            <p className="journey-para">
              After receiving 100+ applications nationwide, CIRCLE’s team of 6
              women traveled a distance of 2,025km through Karachi, Lahore,
              Islamabad, Abbottabad and Peshawar, to inspire women to believe in
              themselves. The team was joined by a group of like-minded and
              motivated individuals who were dedicated to the purpose of
              up-lifting women in Pakistan and helping them break barriers.
            </p>
            <p className="journey-para">
              Our travel through train, Daweoo and bus ensured that we have the
              opportunity to interact with people from all walks of life,
              encourage more women to say “yes” to opportunities and gather the
              support of our male allies.
            </p>
          </div>
        </ScrollAnimation>
        {/* Slider */}
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <Carousel>
            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={mainCover}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={SltphotoOne}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </ScrollAnimation>
      </div>

      <div className="SltFinalsSection">
        <ScrollAnimation animateIn=" zoomIn">
          <h1 className="slt-head">SHE LOVES TECH PAKISTAN FINAL 2019</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn=" zoomIn">
          <p className="slt-parra">
            At the final round in Pakistan, we witnessed women with innovative
            ideas on diverse issues ranging from mental health, education,
            tourism to battling breast cancer pitch their startups at the
            finals. The Pakistan winner will be travelling to Beijing, China to
            compete in the Global Round.
          </p>
        </ScrollAnimation>
        <div className="countDown">
          <ScrollAnimation animateIn=" fadeInDownBig">
            <Rating
              stat="  WINNER"
              startups="DOT MIND UNLOCKED (YISHEL KHAN)"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn=" fadeInDownBig">
            <Rating
              stat="FIRST RUNNER UP  "
              name
              startups="P S S E C (ZARTAJ WASEEM)"
            />
          </ScrollAnimation>
          <ScrollAnimation animateIn=" fadeInDownBig">
            <Rating
              stat="SECOND RUNNERUP"
              startups="THE MAD HATERS (ANEEQA ALI)"
            />
          </ScrollAnimation>
        </div>
      </div>

      <div className="WinnersSection">
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <Carousel>
            <Carousel.Item>
              <img
                id="slideImg"
                className="d-block w-100"
                src={Award}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default SltJourney;
