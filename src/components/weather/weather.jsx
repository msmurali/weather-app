import React, { useEffect, useState } from "react";
import Banner from "../banner/banner";
import BgAnimation from "../bganimation/bganimation";
import Grid from "../grid/grid";
import Header from "../header/header";
import Row from "../row/row";
import "./weather.css";
import fetchData from "../../services/fetchData.js";

export const WeatherContext = React.createContext();
export const LocationContext = React.createContext();

const Weather = () => {
  const [locationData, setLocationData] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dragHandler();
    dataHandler();
  }, []);

  const dataHandler = async () => {
    const { weatherData, locationData } = await fetchData();
    setWeatherData(() => weatherData);
    setLocationData(() => locationData);
    setLoaded(() => true);
  };

  const dragHandler = () => {
    const rows = document.querySelectorAll(".row");
    let mouseDown = false;
    let start, scrollLeft;

    rows.forEach((row) => {
      row.addEventListener("mousedown", (event) => {
        mouseDown = true;
        start = event.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
        row.classList.add("active");
      });

      row.addEventListener("mouseup", () => {
        mouseDown = false;
        row.classList.remove("active");
      });

      row.addEventListener("mouseleave", () => {
        mouseDown = false;
        row.classList.remove("active");
      });

      row.addEventListener("mousemove", (event) => {
        if (mouseDown) {
          event.preventDefault();
          const pos = event.pageX - row.offsetLeft;
          const scrollDist = (pos - start) * 3;
          row.scrollLeft = scrollLeft - scrollDist;
        }
      });
    });
  };

  if (loaded) {
    return (
      <WeatherContext.Provider value={weatherData}>
        <LocationContext.Provider value={locationData}>
          <div className="weather">
            <div>
              <Header />
              <div className="flex-container">
                <div className="column">
                  <Banner
                    data={weatherData.current}
                    location={
                      locationData.EnglishName || locationData.LocalizedName
                    }
                  />
                  <Row title="Hourly Forecast" data={weatherData.hourly} />
                  <Row title="Daily Forecast" data={weatherData.daily} />
                </div>
                <div className="column">
                  <Grid />
                </div>
              </div>
            </div>
            <BgAnimation />
          </div>
        </LocationContext.Provider>
      </WeatherContext.Provider>
    );
  } else {
    return <div></div>;
  }
};

export default Weather;
