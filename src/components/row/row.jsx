import React, { useRef } from "react";
import "./row.css";
import Card from "../card/card";
import getDay from "../../services/getDay.js";
import to12HrFormat from "../../services/dateTime.js";

const Row = ({ title, data }) => {
  const rowRef = useRef(null);

  const scrollHandler = (event) => {
    const row = rowRef.current;
    const rowWidth = row.offsetWidth;
    if (event.target.classList.contains("scroll-left")) {
      row.scrollLeft = row.scrollLeft - rowWidth;
    } else if (event.target.classList.contains("scroll-right")) {
      row.scrollLeft = row.scrollLeft + rowWidth;
    }
  };

  const cardTimeHandler = (timestamp) => {
    if (title === "Hourly Forecast") {
      return to12HrFormat(timestamp);
    } else {
      return getDay(timestamp);
    }
  };

  return (
    <div className="wrapper">
      <h3 className="title">{title}</h3>
      <div className="row-container">
        <button className="scroll-btn scroll-left" onClick={scrollHandler}>
          &lt;
        </button>
        <div className="row" ref={rowRef}>
          {data.map((object, index) => (
            <Card
              key={index}
              temp={object.temp.max || object.temp}
              time={
                title === "Daily Forecast" && index === 0
                  ? "Today"
                  : cardTimeHandler(object.dt)
              }
              climate={object.weather[0].main}
            />
          ))}
        </div>
        <button className="scroll-btn scroll-right" onClick={scrollHandler}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Row;
