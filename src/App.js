import logo from "./logo.svg";
import "./App.css";
import DailyTemp from "./components/DailyTemp";
import SearchInput from "./components/SearchInput";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [temperature, setTemperature] = useState([]);
  const [city, setCity] = useState([]);
  const [weatherArray, setWeatherArray] = useState([]);

  useEffect(() => {}, []);

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
      console.log(weatherAtCoordinates);
      setTemperature(weatherAtCoordinates.data.main);
      setCity(name);
      setWeatherArray(weatherAtCoordinates.data.weather[0]);
    } catch (error) {
      console.log("Invalid postal Code");
    }
  };

  return (
    <div className="App">
      <SearchInput submitPostalCode={submitPostalCode} />
      <DailyTemp temperature={temperature} city={city} weatherArray={weatherArray}/>
    </div>
  );
}

export default App;
