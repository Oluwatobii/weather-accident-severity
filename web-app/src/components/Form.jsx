import React from "react";
import "./form.css";

export default function Form(props) {
  function error() {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please Enter City and Province/State
      </div>
    );
  }
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="City"
              // onChange={}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="province"
              autoComplete="off"
              placeholder="Province/State"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-warning">Get Analysis</button>
          </div>
        </div>
      </form>
    </div>
  );
}
