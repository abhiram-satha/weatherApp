import logo from './logo.svg';
import './App.css';
import DailyTemp from './components/DailyTemp';
import SearchInput from './components/SearchInput';
import {useEffect, useState} from 'react'
import axios from 'axios';



function App() {
  const [coordinates, setCoordinates] = useState([]);
  
  useEffect(()=> {

  }, [])


  const submitPostalCode = async(event) => {
    event.preventDefault();

    const postalCode = event.target[0].value
    try {

      const newGeoCode = await axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${postalCode},CA&appid=ef00555378c1b7ea22939088241c7dc8`)
      
      const {name, lat, lon} = newGeoCode.data
      console.log(name)
    } catch (error) {
      console.log("Invalid postal Code")
    }
  

  }

  return (
    <div className="App">
      <SearchInput submitPostalCode={submitPostalCode}/>
      <DailyTemp />
    </div>
  );
}

export default App;
