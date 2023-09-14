import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top mb-5">
        <div className="container py-4">
          <NavLink className="navbar-brand fs-2 fw-bolder text-uppercase text-white" to="home">
           Start framework
          </NavLink>
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4 mt-3 mt-lg-0">
                <NavLink className="nav-link fw-bolder text-uppercase text-white" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item me-4 mt-3 mt-lg-0">
                <NavLink className="nav-link fw-bolder text-uppercase text-white" to="portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item me-4 mt-3 mt-lg-0">
                <NavLink className="nav-link fw-bolder text-uppercase text-white" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
