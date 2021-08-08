import React from "react";
import RainIcon from "../../asset/icon/rain-icon.svg";
import SunIcon from "../../asset/icon/sun-icon.svg";
import ThunderIcon from "../../asset/icon/thunder-icon.svg";
import CloudyIcon from "../../asset/icon/cloudy-icon.svg";
import CloudIcon from "../../asset/icon/cloud-icon.svg";
import "./card.css";

const Card = ({ climate, temp, time }) => {
  const getIcon = (climate) => {
    if (climate === "Clear") {
      return SunIcon;
    } else if (climate === "Rain") {
      return RainIcon;
    } else if (climate === "Drizzle") {
      return RainIcon;
    } else if (climate === "Clouds") {
      return CloudyIcon;
    } else if (climate === "Thunderstorm") {
      return ThunderIcon;
    } else {
      return CloudIcon;
    }
  };

  return (
    <div className="card">
      <p className="card-day-time">{time}</p>
      <img src={getIcon(climate)} alt="icon" />
      <p className="card-temp">{temp} &deg;C</p>
      <p className="card-climate">{climate}</p>
    </div>
  );
};

export default Card;
