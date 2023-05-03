import React from "react";
import "../styles/Contact.css";
import Navbar from "../Navbar";
export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row vh-75">
          <div className="col-8 h-100">
            <div className="left-side border-end w-100 pe-3 h-100">
              <div className="mx-auto my-4">
                <h2 className="px-4">Submit your query</h2>

                <div className="d-flex flex-column">
                  <div className="d-flex px-4 py-2 justify-content-between">
                    <h6 className="inputHeading px-4 py-2">Name</h6>
                    <input type="text" className="form-control inputType" />
                  </div>

                  <div className="d-flex px-4 py-2 justify-content-between">
                    <h6 className="inputHeading px-4 py-2">Email address</h6>
                    <input type="email" className="form-control inputType" />
                  </div>

                  <div className="d-flex px-4 py-2 justify-content-between">
                    <h6 className="inputHeading px-4 py-2">Contact Number</h6>
                    <input type="text" className="form-control inputType" />
                  </div>

                  <div className="d-flex px-4 py-2 justify-content-between">
                    <h6 className="inputHeading px-4 py-2">
                      Describe your query
                    </h6>
                    <input
                      type="text"
                      className="form-control inputType query"
                    />
                  </div>

                  <div class="py-4 col-md-12 text-center">
                    <button type="submit" className="button btn btn-block">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className=" h-100 p-4 d-flex flex-column">
              <div className="contact mx-auto">
                <div className="mx-0 my-4">
                  <h5 className="contactText m-0">Phone:</h5>
                  <p className="text m-0">1800-1003-2319</p>
                </div>

                <div className="mx-0 my-4">
                  <h5 className="contactText m-0">email:</h5>
                  <p className="text m-0">contact@grassme.com</p>
                </div>

                <div className="mx-0 my-4">
                  <h5 className="contactText m-0">Address:</h5>
                  <div className="address">
                    <p className="text m-0 p-0">101-xyz heights,</p>
                    <p className="text m-0 p-0">abc street,</p>
                    <p className="text m-0 p-0">pune-411099</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
