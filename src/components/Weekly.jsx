import "./Weekly.css";

import Forecast from "./Forecast";

export default function Weekly({weeklyForecastArray, kelvinToCelsius, kelvinToFahrenheit, standardTemp}) {

const forecastSplit = () => {
  let newForecastArray = []
  for (let i = 0; i < weeklyForecastArray.length; i += 8) {
    // console.log(weeklyForecastArray[i])
    newForecastArray.push(<Forecast 
      forecastObject={weeklyForecastArray[i]}
      kelvinToCelsius={kelvinToCelsius} 
      kelvinToFahrenheit={kelvinToFahrenheit}
      key={weeklyForecastArray[i].dt}
      standardTemp={standardTemp}
    />)
  }
  return newForecastArray
}

forecastSplit();
  return (
    <>
    
    {weeklyForecastArray.length > 0 && <h2>5 Day Forecast</h2>}
    
    <div className="weekly-grid weekly">

      {forecastSplit()}
    </div>
    </>
  )
}