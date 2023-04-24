import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MansonryImagesGallery from "../components/Images-gallery/MansonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ================heroSection Start ========== */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"KNOW BEFORE YOU GO"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  {" "}
                  Travelling Opens The Door TO creating{" "}
                  <span className="highlight">Memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  commodi fuga cupiditate, quas aut optio! Provident enim unde
                  obcaecati reprehenderit quisquam autem nam optio rerum ipsa
                  dolores! Cupiditate, fuga et.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* =====================Hero Section Start======================= */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ===================featured tour section start  */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ===================featured tour section end  */}

      {/* ===================Experience section start  */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With Our All Experience <br />
                  We Will Serve You
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2K+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="experienceImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===================Experience section end
       */}

      {/* ===================Gallery section start
       */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit Our Customer Tour Galllery
              </h2>
            </Col>
            <Col lg="12">
              <MansonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===================Gallery section end
       */}

      {/* ===================Testimonial section start
       */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What Our Fans Say About Us</h2>
              <Col lg="12">
                <Testimonial />
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===================Testimonial section end
       */}
      <Newsletter />
    </>
  );
};

export default Home;
