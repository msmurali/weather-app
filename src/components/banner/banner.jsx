import React from "react";
import "./banner.css";
import Pin from "../../asset/icon/pin.svg";

const Banner = ({ data, location }) => {
  return (
    <div className="banner">
      <div className="temp-container">
        <h1 className="temp">{Math.round(data.temp)} &deg;C</h1>
        <p className="temp-range">Feels like {data.feels_like} &deg; C</p>
        <p className="climate">{data.weather[0].main}</p>
      </div>
      <div className="location-container">
        <p className="location">{location}</p>
        <img src={Pin} alt="pin" className="pin-icon" />
      </div>
    </div>
  );
};

export default Banner;
