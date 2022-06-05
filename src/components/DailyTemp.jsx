import "./DailyTemp.css";

export default function DailyTemp({
  city,
  temperature,
  weatherArray,
  kelvinToCelsius,
  kelvinToFahrenheit,
  standardTemp,
}) {

  console.log(temperature)
  const { temp, feels_like, temp_max, temp_min } = temperature;
  const { main, description } = weatherArray;

  // console.log(temperature)

  return (
    <>
      {temperature.length === 0 ? (
        <h2>Please enter a postal code</h2>
      ) : standardTemp ? (
        <div className={main}>
          <h1>{city}</h1>
          <p>Current Temp: {kelvinToCelsius(temp)}°C</p>
          <p>Feels Like: {kelvinToCelsius(feels_like)}°C</p>
          <p>Daily High: {kelvinToCelsius(temp_max)}°C</p>
          <p>Daily Low: {kelvinToCelsius(temp_min)}°C </p>
        </div>
      ) : (
        <div className={main}>
          <h1>{city}</h1>
          <p>Current Temp: {kelvinToFahrenheit(temp)}°F</p>
          <p>Feels Like: {kelvinToFahrenheit(feels_like)}°F</p>
          <p>Daily High: {kelvinToFahrenheit(temp_max)}°F</p>
          <p>Daily Low: {kelvinToFahrenheit(temp_min)}°F </p>
        </div>
      )}
    </>
  );
}
