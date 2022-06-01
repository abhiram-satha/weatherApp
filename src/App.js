import logo from "./logo.svg";
import "./App.css";
import DailyTemp from "./components/DailyTemp";
import SearchInput from "./components/SearchInput";
import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import axios from "axios";
import Weekly from "./components/Weekly";

function App() {
  const [temperature, setTemperature] = useState([]);
  const [city, setCity] = useState([]);
  const [weatherArray, setWeatherArray] = useState([]);
  const [weeklyForecastArray, setWeeklyForecastArray] = useState([]);




useEffect(() => {


  }

    
   
 , []);

  const submitPostalCode = async (event) => {
    event.preventDefault();

    const postalCode = event.target[0].value;
    try {
      const newGeoCode = await axios.get(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${postalCode},CA&appid=${process.env.REACT_APP_GEOCODE}`
      );

      const { name, lat, lon } = newGeoCode.data;

      const weatherAtCoordinates = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER}`
      );

      setTemperature(weatherAtCoordinates.data.main);
      setCity(name);
      setWeatherArray(weatherAtCoordinates.data.weather[0]);

      const weeklyForecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_FORECAST}`
      );

      setWeeklyForecastArray(weeklyForecast.data.list);
    } catch (error) {
      console.log("Invalid postal Code");
    }
  };

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <div className="App">
      <div className="header">
      <h1>Weather Canada</h1>
      <SearchInput submitPostalCode={submitPostalCode} />
      </div>
      <DailyTemp
        temperature={temperature}
        city={city}
        weatherArray={weatherArray}
        kelvinToCelsius={kelvinToCelsius}
      />
      <Weekly
        weeklyForecastArray={weeklyForecastArray}
        kelvinToCelsius={kelvinToCelsius}
      />
    </div>
  );
}

export default App;
