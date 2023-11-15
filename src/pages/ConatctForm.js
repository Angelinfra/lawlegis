import React from "react";
import "./index.css";
import contact from "../Images/contact.jpg";

export default function ConatctForm() {
  return (
    <div className="form">
      <div className="container-fluid ">
        <div className="row top-title">
          <h3 className="contact-title"></h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="pos-top">
            {" "}
            <div className="row">
              <div className="col-md-4">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  className="input"
                  type="number"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <textarea
                  className="txt"
                  rows={2}
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button className="contact-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="Details-bar">
        <h2 className="text-details">For Legal Assistance </h2>
        <h2 className="Detail-btn">Contact US</h2>
      </div>
    </div>
  );
}
