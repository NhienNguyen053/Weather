import React from "react";
import './index.css';

function formatUnixTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
  
    const options = { weekday: 'long', day: 'numeric', month: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

const Forecast = ({ data }) => {
    const margin = {
        marginRight: '50px',
        width: '45px'
    }
    var weatherimg;
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
    return(
        <div className="container6">
            <img src={process.env.PUBLIC_URL + weatherimg} alt="" />
            <div className="container7">
                <span style={margin}>
                {data ? <span>{(data.main.temp - 273.15).toFixed(0)}</span> : null}
                    <div className="span3"></div>
                    <span>C</span>
                </span>
                <span>{data ? <span>{formatUnixTimestamp(data.dt)}</span> : null}</span>
            </div>
        </div>
    )
}
export default Forecast;