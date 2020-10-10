import React from "react";

export default function Weather(props) {
  function minmaxTemp(min, max) {
    if (min && max) {
      return (
        <h3>
          Min Temp<span className="px-4">{Math.round(min - 273)}&deg;c</span>
          Max Temp<span className="px-4">{Math.round(max - 273)}&deg;c</span>
        </h3>
      );
    }
  }
  /*
  <h1>
          {props.city}, {props.province}, {props.country}.
        </h1>
  */
  return (
    <div className="container">
      <div className="cards pt-4">
        {props.city && props.province ? (
          <h1>
            {props.city}, {props.province}, {props.country}.
          </h1>
        ) : null}
        <h5 className="py-4">
          <i className={`wi ${props.icon} display-1`}></i>
        </h5>
        {props.temp ? (
          <h1 className="py-2">{Math.round(props.temp - 273)}&deg;c</h1>
        ) : null}

        {/** showing max and minimum temp*/}
        {minmaxTemp(props.minTemp, props.maxTemp)}

        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
}
