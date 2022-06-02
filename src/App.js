import logo from "./logo.svg";
import "./App.css";
import DailyTemp from "./components/DailyTemp";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import axios from "axios";
import Weekly from "./components/Weekly";

function App() {
  const [temperature, setTemperature] = useState([]);
  const [city, setCity] = useState([]);
  const [weatherArray, setWeatherArray] = useState([]);
  const [weeklyForecastArray, setWeeklyForecastArray] = useState([]);
  const [standardTemp, setStandardTemp] = useState(true)


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

  const kelvinToFahrenheit = (kelvin) => {
    return (kelvin * 1.8) - 459.67
  }

  

  return (
    <div className="App">
      <Header submitPostalCode={submitPostalCode}
      setStandardTemp={setStandardTemp}/>

      <DailyTemp
        temperature={temperature}
        city={city}
        weatherArray={weatherArray}
        kelvinToCelsius={kelvinToCelsius}
        kelvinToFahrenheit={kelvinToFahrenheit}
      />
      <Weekly
        weeklyForecastArray={weeklyForecastArray}
        kelvinToCelsius={kelvinToCelsius}
        kelvinToFahrenheit={kelvinToFahrenheit}
      />
    </div>
  );
}

export default App;
