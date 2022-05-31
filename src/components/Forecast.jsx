export default function Forecast({ forecastObject, kelvinToCelsius }) {
  const { main, weather } = forecastObject;

  return (
      <div className={weather[0].main}>
    <div className="forecast-flex">
        <p>{kelvinToCelsius(main.temp)}°C</p>
        <h6>
          Feels Like:
          <br />
          {kelvinToCelsius(main.temp)}°C
        </h6>
      </div>
    </div>
  );
}
