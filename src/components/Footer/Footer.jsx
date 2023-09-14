import React from "react";
import './footer.css'
export default function Footer() {
  return (
    <>
      <section  className="text-white bottom-0 position-relative w-100">
      <div id="footer" className="py-5" >
      <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-lg-4 text-center">
                <h3 className="text-uppercase">Location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
                <h3 className="text-uppercase">AROUND THE WEB</h3>
                <div className="d-flex justify-content-center">
                  <span className="border rounded-circle icon">  <i className="fa-brands fa-facebook-f rounded-circle"></i></span>
                  <span className="border rounded-circle icon">  <i className="fa-brands fa-twitter"></i></span>
                  <span className="border rounded-circle icon">   <i className="fa-brands fa-linkedin-in"></i></span>
                  <span className="border rounded-circle icon">  <i class="fa-solid fa-globe"></i></span>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
                <h3 className="text-uppercase">ABOUT FREELANCER</h3>
                   <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white py-3" id="copy"><p>Copyright © Your Website 2021</p></div>

      </section>
    </>
  );
}
