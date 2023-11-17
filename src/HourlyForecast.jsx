import React from "react";
import './index.css';

function formatTime(dateString) {
    const date = new Date(dateString.replace(/-/g, '/'));
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}


const HourlyForecast = ({ data }) => {
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
        <div className="container8">
            <p style={{fontSize: '20px'}}>{data ? <span>{formatTime(data.dt_txt)}</span> : null}</p>
            <img src={process.env.PUBLIC_URL + weatherimg} style={{width:'55px', height:'55px'}} alt="" />
            <span style={{height: '25px', textAlign:'center'}}>
            {data ? <span style={{ fontSize: '18px' }}>{(data.main.temp - 273.15).toFixed(0)}</span> : null}
                <div className="span4"></div>
                <span style={{fontSize:'18px'}}>C</span>
            </span>
            {data ? <img src={process.env.PUBLIC_URL + 'navigation 1.png'} alt="" style={{rotate: data.wind.deg + "deg"}}/> : null}
            {data ? <p style={{marginTop:'5px', fontSize: '16px'}}>{(data.wind.speed).toFixed(0)}km/h</p> : null}
        </div>
    )
}
export default HourlyForecast;