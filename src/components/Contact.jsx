
import React from "react";
import "../App.css";

const Contact = () => {
  return (
      <div className="w-50 my-5 bg-light rounded-2 center2">
        <div className="m-auto w-50 d-flex justify-content-center gap-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
           First Name
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter First Name"
          /></label>
          <label htmlFor="exampleFormControlInput1" className="form-label">
           Last Name
          <input
            type="text"
            className="form-control w-100"
            id="exampleFormControlInput1"
            placeholder="Enter Last Name"
          /></label>
        </div>
        <div className="m-auto  w-50 d-flex justify-content-center gap-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
           City
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter City"
          /></label>
          <label htmlFor="exampleFormControlInput1" className="form-label">
           State
          <input
            type="text"
            className="form-control w-100"
            id="exampleFormControlInput1"
            placeholder="Enter State"
          /></label>
        </div>
        <div className="m-auto  w-50 d-flex justify-content-center gap-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          Contact Number
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Contact Number"
          /></label>
          <label htmlFor="exampleFormControlInput1" className="form-label">
           Email
          <input
            type="email"
            className="form-control w-100"
            id="exampleFormControlInput1"
            placeholder="Enter Email"
          /></label>
        </div>
        <div className="m-auto  w-50">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
           Say something about yourself....
          </label>
          <textarea
            className="form-control m-auto"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="m-auto w-50 d-flex justify-content-center gap-5">
  <button className="btn btn-primary w-50 mt-2" type="button">Submit</button>
</div>
      </div>
  );
};

export default Contact;
