import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Gallery_1 from "../../images/studies/1.jpg";
import Gallery_2 from "../../images/studies/2.jpg";
import Gallery_3 from "../../images/studies/3.jpg";
import Gallery_4 from "../../images/studies/4.jpg";
import Gallery_5 from "../../images/studies/5.jpg";
import Gallery_6 from "../../images/studies/6.jpg";

class Porfolio extends Component {
  state = {
    onWebDesign: false,
    onPrintDesign: false,
    onWebApp: false,
    onPhotography: false,
    isOpen: false,
  };

  render() {
    const allElement = (event) => {
      event.preventDefault();
      this.setState({
        onWebApp: true,
        onPrintDesign: true,
        onWebDesign: true,
        onPhotography: true,
      });
    };

    const webDesign = (event) => {
      event.preventDefault();
      this.setState({
        onWebDesign: true,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: true,
        isOpen: true,
      });
    };

    const printDesign = (event) => {
      event.preventDefault();
      this.setState({
        onPrintDesign: true,
        onWebDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const webApp = (event) => {
      event.preventDefault();
      this.setState({
        onWebApp: true,
        onPrintDesign: false,
        onWebDesign: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const Photography = (event) => {
      event.preventDefault();
      this.setState({
        onPhotography: true,
        onWebApp: false,
        onPrintDesign: false,
        onWebDesign: false,
        isOpen: true,
      });
    };

    return (
      <section
        id="protfolio"
        className="gallery-section studies-area section-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <div className="section-title-1 text-center">
                  <span>Aqui nosso melhor trabalho</span>
                  <h2>Nossos estudos de caso resolvidos</h2>
                </div>
                <ul>
                  <li>
                    <Link
                      data-filter="*"
                      to="/"
                      className="current"
                      onClick={allElement}
                    >
                      Todos
                    </Link>
                  </li>
                  <li>
                    <Link data-filter=".Web-Design" to="/" onClick={webDesign}>
                      Questões familiares
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-filter=".Print-Design"
                      to="/"
                      onClick={printDesign}
                    >
                      Imobiliária
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-filter=".Web-Application"
                      to="/"
                      onClick={webApp}
                    >
                      empresarial
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                <div
                  className={
                    this.state.onPrintDesign
                      ? "grid active"
                      : "grid" && this.state.onWebApp
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <div className="studies-item">
                    <div className="studies-single">
                      <img
                        src={Gallery_1}
                        className="img img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="overlay-text">
                      <div className="text-inner">
                        <p className="sub">Corporate</p>
                        <h3>General Practice</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? "grid active"
                      : "grid" && this.state.onPrintDesign
                      ? "grid active"
                      : "grid" && this.state.onWebApp
                      ? "grid active"
                      : "grid" && this.state.onPhotography
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <div className="studies-item">
                    <div className="studies-single">
                      <img
                        src={Gallery_2}
                        className="img img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="overlay-text">
                      <div className="text-inner">
                        <p className="sub">Em geral</p>
                        <h3>Problema Pessoal</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? "grid active"
                      : "grid" && this.state.onWebApp
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <div className="studies-item">
                    <div className="studies-single">
                      <img
                        src={Gallery_3}
                        alt=""
                        className="img img-responsive"
                      />
                    </div>
                    <div className="overlay-text">
                      <div className="text-inner">
                        <p className="sub">Empresa</p>
                        <h3>Contabilidade Empresarial</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.onPrintDesign
                      ? "grid active"
                      : "grid" && this.state.onPhotography
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <div className="studies-item">
                    <div className="studies-single">
                      <img
                        src={Gallery_4}
                        alt=""
                        className="img img-responsive"
                      />
                    </div>
                    <div className="overlay-text">
                      <div className="text-inner">
                        {/* <p className="sub">kProblema de famíliaProblema de família</p> */}
                        <h3>Problema familiar</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.onPrintDesign
                      ? "grid active"
                      : "grid" && this.state.onPhotography
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <div className="studies-item">
                    <div className="studies-single">
                      <img
                        src={Gallery_5}
                        alt=""
                        className="img img-responsive"
                      />
                    </div>
                    <div className="overlay-text">
                      <div className="text-inner">
                        <p className="sub">Corporativo</p>
                        <h3>Prática geral</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Porfolio;
