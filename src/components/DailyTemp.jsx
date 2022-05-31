import "./DailyTemp.css";

export default function DailyTemp({city, temperature, weatherArray, kelvinToCelsius}) {

  const {temp, feels_like, temp_max, temp_min} = temperature;
  const {main, description} = weatherArray



  // console.log(temperature)

  return(
    <>

      {temperature.length === 0  ? <h2>Please enter a postal code</h2> :  
      <div className={main}>
      <h1>{city}</h1>
      <p>Current Temp: {kelvinToCelsius(temp)}°C</p>
      <p>Feels Like: {kelvinToCelsius(feels_like)}°C</p>
      <p>Daily High: {kelvinToCelsius(temp_max)}°C</p>
      <p>Daily Low: {kelvinToCelsius(temp_min)}°C </p>
      </div>}
    </>
  )
}