import Demo from "./Demo";

export default function Forecast({
  forecastObject,
  kelvinToCelsius,
  kelvinToFahrenheit,
  standardTemp,
}) {
  const { main, weather, dt_txt } = forecastObject;

  const monthCalculator = () => {
    if(dt_txt[6] === "1") {
      console.log(true)
    }
  }

  monthCalculator()

  console.log(dt_txt)
  return (
    <div className={weather[0].main}>
      <div className="forecast-flex">
        <h5>
          {dt_txt[8]}
          {dt_txt[9]}
        </h5>
        {standardTemp ? (
          <>
            <h4>{kelvinToCelsius(main.temp)}°C</h4>
          </>
        ) : (
          <>
            <h4>{kelvinToFahrenheit(main.temp)}°F</h4>
           
          </>
        )}

        {/* <Demo /> */}
      </div>
    </div>
  );
}
