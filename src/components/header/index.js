import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import logo from "../../images/logo/logo_tq.png";

import "./style.css";

const Header = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="header-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" style={{ height: 70 }} />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block col-m">
              <div className="main-menu">
                <nav className="nav_mobile_menu">
                  <ul>
                    <li className="active">
                      <Link to="/">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/about">Sobre</Link>
                    </li>

                    <li>
                      <Link to="/case-stadies">Áreas de Atuação</Link>
                    </li>
                    <li>
                      <Link to="/contact">Entre em Contato</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-md-1 col-sm-1 col-1">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
