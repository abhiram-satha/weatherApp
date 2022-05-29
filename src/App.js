import logo from './logo.svg';
import './App.css';
import DailyTemp from './components/DailyTemp';
import SearchInput from './components/SearchInput';
import {useEffect, useState} from 'react'




function App() {
  const [coordinates, setCoordinates] = useState([]);
  
  useEffect(()=> {
    
  })


  const submitPostalCode = (event) => {
    event.preventDefault();
    console.log(event)
  }

  return (
    <div className="App">
      <SearchInput submitPostalCode={submitPostalCode}/>
      <DailyTemp />
    </div>
  );
}

export default App;
