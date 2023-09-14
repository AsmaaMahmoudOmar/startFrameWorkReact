import React from "react";
import './portfolio.css';
import imageOne from "../../Assets/port1.png";
import imageTwo from "../../Assets/port2.png";
import imageThree from "../../Assets/port3.png";
export default function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="mt-5 d-flex justify-content-center align-items-center text-blue"
      >
        <div className="container pt-5 mt-5">
          <div className="text-center mb-4">
            <h1 className="text-uppercase fw-bolder"> Portfolio COMPONENT</h1>
            <span className="star">
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="row g-5 pb-5">
            <div className="col-lg-4">
              <div className="item">
                <img src={imageOne} alt="port1" className="w-100 rounded-2" />
                <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="item">
                <img src={imageTwo} alt="port2" className="w-100 rounded-2" />
                <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="item">
                <img src={imageThree} alt="port3" className="w-100 rounded-2" />
                <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <img src={imageOne} alt="port1" className="w-100 rounded-2" />
                <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="item">
                <img src={imageTwo} alt="port2" className="w-100 rounded-2" />
                <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="item">
                <img src={imageThree} alt="port3" className="w-100 rounded-2" />
                <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
