import Demo from "./Demo";

export default function Forecast({ forecastObject, kelvinToCelsius }) {
  const { main, weather, dt_txt } = forecastObject;

  return (
    <div className={weather[0].main}>
      <div className="forecast-flex">
        <h5>{dt_txt[8]}{dt_txt[9]}</h5>
        <p>{kelvinToCelsius(main.temp)}°C</p>
        <h6>
          Feels Like:
          <br />
          {kelvinToCelsius(main.temp)}°C
        </h6>
        <Demo />
      </div>
    </div>
  );
}
