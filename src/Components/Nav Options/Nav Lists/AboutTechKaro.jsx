import React from "react";
// import "node_modules/video-react/dist/video-react.css"; // import css
// import { Player } from "video-react";
import "./AboutTechKaro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import SlideOne from "../../../Assets/Images/sadaffi.jpeg";
import SlideTwo from "../../../Assets/Images/gaditec.jpg";
import SlideThree from "../../../Assets/Images/books.jpg";
import SlideFour from "../../../Assets/Images/hackathone.jpg";
import Header from "../../Header";
import Navigation from "../../Navigation";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const AboutTechKaro = () => {
  return (
    <div>
      <div className="Container">
        {/* <Player
        playsInline
        poster="/website/src/Assets/Images/laptops.jpeg"
        src="/website/src/Assets/Videoes/teaser-TK.mp4"
      /> */}
        <Header />
        <Navigation />
        <div className="about-tech-karo">
          <ScrollAnimation animateIn=" lightSpeedIn" animateOut="lightSpeedOut">
            <h1>About Tech Karo</h1>
          </ScrollAnimation>
          <p>
            <ScrollAnimation animateIn=" zoomIn" animateOut="zoomOut">
              Tech Karo brings technology, which includes coding and digital
              marketing combined with life skills (discipline, resilience,
              problem solving, financial planning) to women to enable them to
              increase their livelihood, and generate positive impact for their
              families and communities.
            </ScrollAnimation>
          </p>
          <p>
            <ScrollAnimation animateIn=" zoomIn" animateOut="zoomOut">
              Through building women as economic agents, CIRCLE will transform
              Pakistan’s future and break the endemic trap of poverty and lack
              of education. The project focuses on innovation and quality rather
              than numbers to ensure impact and learning. Ultimately the project
              aims to foster inclusive growth and women’s upward social
              mobility. The Tech Karo initiative will address SDG 5, 8 and 17.
            </ScrollAnimation>
          </p>
          <p>
            <ScrollAnimation animateIn=" zoomIn" animateOut="zoomOut">
              The results from the pilot have flipped the traditional model by
              bringing majority young women in the classroom and teaching them
              how to code. Out of 50 graduates in 2018, 30 were placed in
              internships and jobs.
            </ScrollAnimation>
          </p>
          <p>
            <ScrollAnimation animateIn=" zoomIn" animateOut="zoomOut">
              In 2019 building on the pilot and successful results, CIRCLE is
              running two technology training programs; web development course
              (coding) where we have introduced free code camp certification
              (globally recognized certification) as well as local content and
              Digital marketing course to help girls become freelancers.
            </ScrollAnimation>
          </p>
        </div>

        <div className="ui-content">
          <ScrollAnimation animateIn=" slideInUp" animateOut="slideInDown">
            <h2>USMAN INSTITUTE OF TECHNOLOGY (UIT)</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn=" slideInUp" animateOut="slideOutUp">
            <p>
              The program aims to teach web development to students through soft
              wares like: HTML, CSS3, Java script programming, and Mobile Web
              Apps.
            </p>

            <ul>
              <li className="uit">Web development course at UIT</li>
              <li className="uit">8 Month program</li>
              <li className="uit">
                50 graduates from 2018 (15 placed in jobs/internships)
              </li>
              <li className="uit">Existing cohort includes 100 students</li>
            </ul>
          </ScrollAnimation>
        </div>
      </div>
      <div className="slider-section">
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <Carousel>
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
          </Carousel>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default AboutTechKaro;
