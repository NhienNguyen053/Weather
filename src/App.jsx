import React, {useState, useEffect} from 'react';
import DarkMode from './DarkMode';
import SearchBar from './SearchBar';
import CurrentLocation from './CurrentLocation';
import Clock from './Clock';
import Weather from './Weather';
import Forecast from './Forecast';
import HourlyForecast from './HourlyForecast';
import ToggleNavbar from './ToggleNavbar';
import axios from 'axios';

function App() {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [currenlocation, setcurrentlocation] = useState("");
  const [city, setCity] = useState("Ha Noi");
  const [isDarkMode, setDarkMode] = useState(false);
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [isCityFound, setIsCityFound] = useState("");
  const indicesToMap = [0, 8, 16, 24, 32];
  const handleCityChange = (newCity) => {
    setCity(newCity);
  };
  useEffect(() => {
    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae709fb8c790e6f7dff116e5467119af`);
            const data = await response.json();
            if (data.cod && data.cod === "404") {
                setIsCityFound("City not found!");
            } else if (data.cod && data.cod === "400"){
                setIsCityFound("Please allow browser to use your location!");
            } 
            else {
                setIsCityFound("");
                setWeather(data);
            }
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };
    const fetchForecast = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ae709fb8c790e6f7dff116e5467119af&cnt=33`);
            const data = await response.json();
            if (data.cod && data.cod === "404") {
                setIsCityFound("City not found!");
            } else if (data.cod && data.cod === "400"){
                setIsCityFound("Please allow browser to use your location!");
            } 
            else {
                setIsCityFound("");
                setForecast(data);
            }
        } catch (error) {
            console.error('Error fetching forecast:', error);
        }
    };
    fetchWeather();
    fetchForecast();
  }, [city]);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  const toggleSlider = () => {
    setSliderOpen(!sliderOpen);
  };
  useEffect(() => {
    const getLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=5b5ab3e52cc9447ebcb377b18fcb249f`);
                        const cityName = response.data.results[0].components.city;
                        setcurrentlocation(cityName);
                    } catch (error) {
                        console.error('Error getting city name:', error);
                    }
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };
    getLocation();
  }, []);
  return (
    <>
    <div className='container'>
      <div onClick={toggleSlider} style={{marginBottom: '20px', width: 'fit-content'}}>
        <ToggleNavbar />
      </div>
      <div style={{width: '100%', display: 'none', flexWrap: 'wrap', overflow: 'hidden', height: sliderOpen ? '230px' : '0', transition: 'all 0.5s', marginBottom: '20px', alignContent: 'baseline'}} id='slider'>
        <SearchBar onCityChange={handleCityChange}/>
        {isCityFound !== "" && (
          <div className="notfound2">
            {isCityFound}
          </div>
        )}
        <CurrentLocation onCityChange={handleCityChange} data={currenlocation}/>
        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className='container1' id='first'>
        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <SearchBar onCityChange={handleCityChange}/>
        {isCityFound !== "" && (
          <div className="notfound">
            {isCityFound}
          </div>
        )}
        <CurrentLocation onCityChange={handleCityChange} data={currenlocation}/>
      </div>
      <div className='container1'>
        <Clock data={weather} />
        <Weather data={weather} isDarkMode={isDarkMode} />
      </div>
      <div className='container1'>
        <div className="container4" style={{width: '32%', padding: '10px'}} id="forecast">
            <p style={{fontSize: '28px', margin: '0'}}>5 Days Forecast:</p>
            {forecast.list && forecast.list.map((data, index) => (
            indicesToMap.includes(index) && (
            <Forecast key={data.dt} data={data} />
            )))}
        </div>
        <div className="container4" style={{width: '63%', padding: '10px 50px'}} id="forecast2">
            <p style={{fontSize: '28px', margin: '0 0 10px 0'}}>Hourly Forecast:</p>
            <div style={{flexDirection: 'row', display: 'flex'}} id='hourly'>
            {forecast.list && forecast.list.slice(0, 5).map((data) => (
            <HourlyForecast key={data.dt} data={data} />
            ))}
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
