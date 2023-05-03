import React from "react";
import "../styles/Sign-up.css";

export default function Sign_up() {
  return (
    <div>
      <div className="register mx-auto">
        <h2 className="text-center py-4">Register</h2>

        <div className="d-flex px-4 py-2">
          <h6 className="inputHeading px-4 py-2">Name</h6>
          <input type="text" className="form-control inputType" />
        </div>

        <div className="d-flex px-4 py-2">
          <h6 className="inputHeading px-4 py-2">Email address</h6>
          <input type="email" className="form-control inputType" />
        </div>

        <div className="d-flex px-4 py-2">
          <h6 className="inputHeading px-4 py-2">Password</h6>
          <input type="password" className="form-control inputType" />
        </div>

        <div className="d-flex px-4 py-2">
          <h6 className="inputHeading px-4 py-2">Contact Number</h6>
          <input type="text" className="form-control inputType" />
        </div>

        <div class="py-4 col-md-12 text-center">
          <button type="submit" className="button btn btn-block">
            Sign-up
          </button>
        </div>

        <div class="mx-4 a-divider a-divider-break">
          <h5>or Sign in with</h5>
        </div>

        <p className="alternative text-center">
          <a href="#">
            <i class="fa-brands facebook fa-facebook mx-4 py-4"></i>
          </a>
          <a href="#">
            <i class="fa-brands google fa-google mx-4 py-4"></i>
          </a>
          <a href="#">
            <i class="fa-brands apple fa-apple mx-4 py-4"></i>
          </a>
          <a href="#">
            <i class="fa-brands twitter fa-twitter mx-4 py-4"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
