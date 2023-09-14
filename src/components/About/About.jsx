import React from "react";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="text-white mt-5 outerSection d-flex justify-content-center align-items-center"
      >
        <div className="container pt-5 mt-5">
          <div className="text-center mb-4">
            <h1 className="text-uppercase"> ABOUT COMPONENT</h1>
            <span className="star">
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
