import React, { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

import Weather from "./components/Weather";
import Form from "./components/Form";

import axios from "axios";

function App() {
  const [cityName, setCityName] = useState(undefined);
  const [provinceCode, setProvinceCode] = useState(undefined);
  const [countryCode, setCountryCode] = useState(undefined);
  let [icon, setIcon] = useState(undefined);
  const [celcius, setCelcius] = useState(undefined);
  const [tempMin, setTempMin] = useState(undefined);
  const [tempMax, setTempMax] = useState(undefined);
  const [description, setDescription] = useState("");
  let [error, setError] = useState(false);

  const weatherAPIKey = "f90d5a820e8d2575fa1641a874d0e39a";

  const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
  };

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const province = e.target.elements.province.value;

    setProvinceCode(province);

    /* Example of API calls: api.openweathermap.org/data/2.5/weather?q={city name},{state code},{province code}&appid={API key} */

    if (city && province) {
      axios({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${province},&appid=${weatherAPIKey}`,
        method: "GET",
      }).then((response) => {
        /* console.log("Hello", response.data); */
        setCityName(response.data.name);
        setCountryCode(response.data.sys.country);

        setCelcius(response.data.main.temp);
        setTempMin(response.data.main.temp_min);
        setTempMax(response.data.main.temp_max);
        setDescription(response.data.weather[0].description);
        setIcon(getWeatherIcon(response.data.weather[0].id));
        setError(false);
      });
    } else {
      setError(true);
    }

    const getWeatherIcon = function (iconId) {
      if (iconId >= 200 && iconId <= 232) {
        icon = weatherIcon.Thunderstorm;
        return icon;
      } else if (iconId >= 300 && iconId <= 321) {
        icon = weatherIcon.Drizzle;
        return icon;
      } else if (iconId >= 500 && iconId <= 531) {
        icon = weatherIcon.Rain;
        return icon;
      } else if (iconId >= 600 && iconId <= 622) {
        icon = weatherIcon.Snow;
        return icon;
      } else if (iconId >= 701 && iconId <= 781) {
        icon = weatherIcon.Atmosphere;
        return icon;
      } else if (iconId === 800) {
        icon = weatherIcon.Clear;
        return icon;
      } else if (iconId >= 801 && iconId <= 804) {
        icon = weatherIcon.Clouds;
        return icon;
      } else {
        icon = weatherIcon.Clouds;
        return icon;
      }
    };
  };

  return (
    <div className="App">
      <Form loadweather={getWeather} error={error} />
      <Weather
        city={cityName}
        province={provinceCode}
        country={countryCode}
        temp={celcius}
        minTemp={tempMin}
        maxTemp={tempMax}
        description={description}
        icon={icon}
        error={error}
      />
    </div>
  );
}

export default App;
