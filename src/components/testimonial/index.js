import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialImg_1 from "../../images/testimonials/img-1.jpg";
import testimonialImg_2 from "../../images/testimonials/img-2.jpg";
import testimonialImg_3 from "../../images/testimonials/img-3.jpg";

class Testimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1200,
      slidesToShow: 2,
      arrows: false,
      margin: 50,
      autoplay: true,
      slidesToScroll: 1,
      centerPadding: 30,
      focusOnSelect: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="testimonial-area section-padding">
        <div className="container">
          <div className="testimonial-active">
            <Slider {...settings}>
              <div className="my-testimonial">
                <div className="inner-content">
                  <div className="content">
                    <div className="image-box">
                      <img src={testimonialImg_1} alt="" />
                    </div>
                    <div className="quote-icon">
                      <i className="fi flaticon-right-quote"></i>
                    </div>
                    <h4>Brenda Tertuliano</h4>
                    <div className="designation">CEO</div>
                    <div className="text">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book.
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-testimonial">
                <div className="inner-content">
                  <div className="content">
                    <div className="image-box">
                      <img src={testimonialImg_2} alt="" />
                    </div>
                    <div className="quote-icon">
                      <i className="fi flaticon-right-quote"></i>
                    </div>
                    <h4>Larissa Vieira</h4>
                    <div className="designation">CEO</div>
                    <div className="text">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book.
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
