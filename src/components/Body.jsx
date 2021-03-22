import axios from "axios";
import React, { useEffect } from "react";

import "../styles/Body.css";
import { apiKey } from "../utils/key";

const Body = ({ city, setCity }) => {
  useEffect(() => {
    const fetchWeather = async () => {
      await axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
        )
        .then((response) => {
          setCity(response.data);
        })
        .catch((error) => console.log(error));
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="forecast__body">
      <div className="today__forecast">
        {typeof city.location != "undefined" ? (
          <div style={props} className="daily__container">
            <h3 style={{ fontWeight: "bolder", userSelect: "none" }}>Today</h3>
            <div className="main">
              <h2>{city.location.name}</h2>
              <h4>{city.location.localtime}</h4>
            </div>

            <div className="search__details">
              <h4>{city.current.temp_c}°C</h4>
              <img src={city.current.condition.icon} />
              <h4>{city.current.condition.text}</h4>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="otherdays">
        <div className="days">
          {typeof city.forecast != "undefined"
            ? city.forecast.forecastday.map((day, i) => (
                <div className="days__forecast ">
                  <h3
                    key={i}
                    style={{
                      marginTop: "10px",
                      fontWeight: "bolder",
                      userSelect: "none",
                    }}
                  >
                    {day.date}
                  </h3>
                  <div className="day__details">
                    <h4>{day.day.avgtemp_c}°C</h4>
                    <h4>{day.day.condition.text}</h4>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Body;
/*Moderate rain, Partly cloudy, Light snow, Sunny, Light rain,
 */
