export default function DailyTemp({city, temperature}) {

  const {temp, feels_like, temp_max, temp_min} = temperature;

  console.log(temperature)
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  }
  return(
    <>
      Daily Weather

      {temperature.length === 0  ? <h2>Please enter a postal code</h2> :  
      <>
      <h1>{city}</h1>
      <p>Current Temp: {kelvinToCelsius(temp)}°C</p>
      <p>Feels Like: {kelvinToCelsius(feels_like)}°C</p>
      <p>Daily High: {kelvinToCelsius(temp_max)}°C</p>
      <p>Daily Low: {kelvinToCelsius(temp_min)}°C </p>
      </>}
    </>
  )
}