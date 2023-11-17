import React, { useState } from "react";
import './index.css';

const Weather = ({ data, isDarkMode }) => {
    var weatherimg;
    const [temperatureUnit, setTemperatureUnit] = useState('Fahrenheit');

    const toggleTemperatureUnit = () => {
        setTemperatureUnit(unit => (unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'));
    };

    const convertTemperature = (temp) => {
        if (temperatureUnit === 'Celsius') {
            return ((temp * 9/5) + 32).toFixed(0);
        } else {
            return temp;
        }
    };

    if (data.weather && data.weather.length > 0 && data.weather[0].main === "Clouds") {
        weatherimg = "clouds.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Clear"){
        weatherimg = "sun 1.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Tornado"){
        weatherimg = "hurricane.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Squall"){
        weatherimg = "rainy-day.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Ash"){
        weatherimg = "volcano.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Dust"){
        weatherimg = "dust.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Sand"){
        weatherimg = "sand.png";
    }else if(data.weather && data.weather.length > 0 && (data.weather[0].main === "Fog" || data.weather[0].main === "Haze" || data.weather[0].main === "Smoke" || data.weather[0].main === "Mist")){
        weatherimg = "fog.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Snow"){
        weatherimg = "snow.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Rain"){
        weatherimg = "rain.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Drizzle"){
        weatherimg = "heavy-rain.png";
    }else if(data.weather && data.weather.length > 0 && data.weather[0].main === "Thunderstorm"){
        weatherimg = "thunderstorm.png";
    }

    function convertTimestampToTime(timestamp) {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        return `${formattedHours}:${formattedMinutes} ${period}`;
    }
    
    const width = {
        width: '55%',
        padding: '5px 20px',
        display: 'flex'
    };
    const fontSize = {
        fontSize: '30px',
        fontFamily: 'Poppins-Medium',
        marginLeft: '5px',
        position: 'relative',
        top: '5px',
        cursor: 'pointer'
    };
    const width2 = {
        width: '30%',
    };
    const position = {
        position: 'relative',
        marginTop: '15px'
    };

    return (
        <div className="container4" style={width} id="weather">
            <div style={width2} className="weather2">
                <div className="temp">
                    <span className="text-gradient" onClick={toggleTemperatureUnit}>
                        {data.main ? <span>{convertTemperature((data.main.temp - 273.15).toFixed(0))}</span> : null}
                        <div className="span1"></div>
                        <span>{temperatureUnit === 'Celsius' ? 'F' : 'C'}</span>
                    </span>
                </div>
                <div className="temp2">
                    <div>
                        <span>Feels like:</span>
                        <span style={fontSize}>
                            {data.main ? <span>{convertTemperature((data.main.feels_like - 273.15).toFixed(0))}</span> : null}
                            <div className="span2"></div>
                            <span>{temperatureUnit === 'Celsius' ? 'F' : 'C'}</span>
                        </span>
                    </div>
                </div>
                <div style={position} className="temp3">
                    <img src={process.env.PUBLIC_URL + (isDarkMode ? '/sunrise-white 2.png' : '/sunrise-white 1.png')} className="icon" alt="" />
                    <div>
                        <p className="p3">Sunrise</p>
                        <p className="p4">{data.sys ? <span>{convertTimestampToTime(data.sys.sunrise)}</span> : null}</p>
                    </div>
                </div>
                <div style={position} className="temp3">
                    <img src={process.env.PUBLIC_URL + (isDarkMode ? '/sunset-white 2.png' : '/sunset-white 1.png')} className="icon" alt="" />
                    <div>
                        <p className="p3">Sunset</p>
                        <p className="p4">{data.sys ? <span>{convertTimestampToTime(data.sys.sunset)}</span> : null}</p>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', width: '36%', flexWrap: 'wrap'}} className="weather2">
                <img src={process.env.PUBLIC_URL + weatherimg}  className="icon2" alt="" />
                <br />
                <p style={{fontSize: '26px', fontFamily: 'Poppins-Medium', width: '100%'}}>{data.weather ? <span>{data.weather[0].main}</span> : null}</p>
            </div>
            <div style={{width: '34%'}} className="container5 weather2">
                <div className="container9">
                    <img src={process.env.PUBLIC_URL + (isDarkMode ? '/humidity 2.png' : '/humidity 1.png')} alt="" />
                    <p>{data.main ? <span>{data.main.humidity}%</span> : null}</p>
                    <p>Humidity</p>
                </div>
                <div className="container9">
                    <img src={process.env.PUBLIC_URL + (isDarkMode ? '/wind 2.png' : '/wind 1.png')} alt="" />
                    <p>{data.wind ? <span>{data.wind.speed}km/h</span> : null}</p>
                    <p>Wind Speed</p>
                </div>
                <div className="container9">
                    <img src={process.env.PUBLIC_URL + (isDarkMode ? '/pressure-white 2.png' : '/pressure-white 1.png')} alt="" />
                    <p>{data.main ? <span>{data.main.pressure}hPa</span> : null}</p>
                    <p>Pressure</p>
                </div>
                <div className="container9">
                    <img src={process.env.PUBLIC_URL + (isDarkMode ? '/uv-white 2.png' : '/uv-white 1.png')} alt="" />
                    <p>7</p>
                    <p>UV</p>
                </div>
            </div>
            </div>
    );
}

export default Weather;
