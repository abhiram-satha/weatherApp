import Demo from "./Demo";

export default function Forecast({
  forecastObject,
  kelvinToCelsius,
  kelvinToFahrenheit,
  standardTemp,
}) {
  const { main, weather, dt_txt } = forecastObject;

  const monthCalculator = () => {
    if(dt_txt[5] === "1") {
      if(dt_txt[6] === "0") {
        return "Oct "
      } else if (dt_txt[6] === "1") {
        return "Nov "
      } else {
        return "Dec "
      }
    } else {
      if(dt_txt[6] === "1") {
        return "Jan "
      } else if (dt_txt[6] === "2") {
        return "Feb "
      } else if (dt_txt[6] === "3") {
        return "Mar "
      } else if (dt_txt[6] === "4") {
        return "Apr "
      } else if (dt_txt[6] === "5") {
        return "May "
      } else if (dt_txt[6] === "6") {
        return "Jun "
      } else if (dt_txt[6] === "7") {
        return "Jul "
      } else if (dt_txt[6] === "8") {
        return "Aug "
      } else if (dt_txt[6] === "9") {
        return "Sep "
      }else {
        return ""
      }
    }

    
  }

  monthCalculator()

  return (
    <div className={weather[0].main}>
      <div className="forecast-flex weekly">
        <h5>
          {monthCalculator()}
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
        Expect {weather[0].description}

        {/* <Demo /> */}
      </div>
    </div>
  );
}
