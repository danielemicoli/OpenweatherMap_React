import './App.css';
import React,{useState,useEffect} from 'react'

const API_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = '746c244e1e6c001b6a8197b506b12c22';

function App() {

const [weather, setWeather] = useState([{}]);
const [city, setCity] = useState('');


const getWeather = (evt)=>{
  if(evt.key === "Enter"){
    try{
      fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => {
        setWeather(data)
        // getForecast(dataForecast)
 
    })      

  }      
  catch(err){
    console.error(err)
}
}

}
let dataForecast = []



  return (

      <div  className="app-warm">
       <main>
          <div className="search-box">
              <input 
              className="search-bar"
              onChange={e => setCity(e.target.value)}
              value={city}
              onKeyPress={getWeather}
              />
          </div>
           {typeof weather.main === 'undefined'? (
           <div>
                    <p className="noCity">Enter a city name!</p>
           </div>
        ) : (
          
              <div className="location-box">
                  <div className="location">{`${weather.name}, ${weather.sys.country}`}</div>
              <div className="weather-box">
              <div className="temp">
                {(Math.round(weather.main.temp)-273.15).toFixed(0)+'°C'} <img className="weather-logo" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
              </div>
                <p className="weather" id="main-description">{weather.weather[0].main}</p>
                <p className="weather" id="feels-like">{'Feels like: '+(Math.round(weather.main.feels_like)-273.15).toFixed(0)+'°C'}</p>

                <p className="weather" id="max-temp">{'Temp Max: '+(Math.round(weather.main.temp_max)-273.15).toFixed(0)+'°C'}</p>
                <p className="weather" id="min-temp">{'Temp Min: '+(Math.round(weather.main.temp_min)-273.15).toFixed(0)+'°C'}</p>

              </div>
              <div className="temp">
                            {(Math.round(weather.main.temp)-273.15).toFixed(0)+'°C'}
              </div>
                <div className="weather-box" id="forecast">
                </div>
              </div>
              


       )}
       </main>
     </div>
      

  
  )} 

export default App;
