import "./Weekly.css";

import Forecast from "./Forecast";

export default function Weekly({weeklyForecastArray, kelvinToCelsius}) {

const forecastSplit = () => {
  let newForecastArray = []
  for (let i = 0; i < weeklyForecastArray.length; i += 8) {
    // console.log(weeklyForecastArray[i])
    newForecastArray.push(<Forecast 
      forecastObject={weeklyForecastArray[i]}
      kelvinToCelsius={kelvinToCelsius} 
      key={weeklyForecastArray[i].dt}
    />)
  }
  return newForecastArray
}

forecastSplit();
  return (
    <>
    
    <h2>5 Day Forecast</h2>
    <div className="weekly-grid">

      {forecastSplit()}
    </div>
    </>
  )
}