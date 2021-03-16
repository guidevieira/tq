import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };
    return (
      <section className="hero hero-slider-wrapper hero-style-1">
        <div className="hero-slider">
          <Slider {...settings}>
            <div className="slide1 slide">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-8 slide-caption">
                    <h2>Lorem Ipsum is simply dummy text of the printing.</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries.{" "}
                    </p>
                    <div className="btns">
                      <div className="btn-style">
                        <Link to="/contact">Entre em Contato</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default SimpleSlider;
