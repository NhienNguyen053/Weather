import React from "react";
import './index.css';

function CurrentLocation( { onCityChange, data } ) {
    const handleClick = () => {
        onCityChange(data);
    };
    return(
        <button className="btn1" onClick={handleClick}>
            <img src={process.env.PUBLIC_URL + '/current location icon.png'} style={{width:'28px', height:'28px', position:'relative', top: '3px', left: '-5px'}} alt="" />
            <span className="p2">Current Location</span>
        </button>
    )
}
export default CurrentLocation;