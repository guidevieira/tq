import React from "react";
import ContactForm from "../CommentForm";
import "./style.css";

const ContactSection = () => {
  return (
    <div className="contact-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-text">
              <h2>Você tem interesse em entrar em contato conosco?</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
                from 45 BC.
              </p>
              <div className="contact-sub">
                <div className="contact-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="contact-c">
                  <h4>nossa localização</h4>
                  <span>rua ...</span>
                </div>
              </div>
              <div className="contact-sub">
                <div className="contact-icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact-c">
                  <h4>Telefone</h4>
                  <span>11-99999-999</span>
                </div>
              </div>
              <div className="contact-sub">
                <div className="contact-icon">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                <div className="contact-c">
                  <h4>Email</h4>
                  <span>sample@tqadvogacia.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-7 col-md-12 col-sm-12">
            <div className="contact-content">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
