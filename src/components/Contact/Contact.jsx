import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="text-blue mt-5 d-flex justify-content-center align-items-center"
      >
        <div className="container pt-5 mt-5">
          <div className="text-center mb-4">
            <h1 className="text-uppercase fw-bolder"> contact COMPONENT</h1>
            <span className="star">
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
        
            <form className="mx-auto mb-5 w-75">
          
             <label htmlFor="userName" className="label position-relative">userName:</label>
              <input
             
                id="userName"
                type="text"
                placeholder="userName"
                name="userName"
                class="form-control shadow-none border-0 border-bottom py-3 position-relative"
              />
              <label htmlFor="userAge" className="label position-relative">userAge:</label>
              <input
             
                id="userAge"
                type="number"
                placeholder="userAge"
                name="userAge"
                class="form-control shadow-none border-0 border-bottom py-3 position-relative"
              />
              <label htmlFor="userEmail" className="label position-relative">userEmail:</label>
              <input
             
                id="userEmail"
                type="email"
                placeholder="userEmail"
                name="userEmail"
                class="form-control shadow-none border-0 border-bottom py-3 position-relative"
              />
              <label htmlFor="userPassword" className="label position-relative">userPassword:</label>
              <input
             
                id="userPassword"
                type="password"
                placeholder="userPassword"
                name="userPassword"
                class="form-control shadow-none border-0 border-bottom py-3 position-relative"
              />
            
              <button id='btn' className="btn mt-4 text-white" type="button">send message</button>
        
            </form>
         
        </div>
      </section>
    </>
  );
}
