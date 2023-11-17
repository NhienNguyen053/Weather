import React from "react";
import './index.css';

function formatTimeInTimezone(timestamp, timezoneOffsetInSeconds) {
    const date = new Date(timestamp + timezoneOffsetInSeconds * 1000);
  
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
  
    const timeZone = 'UTC';

    return new Intl.DateTimeFormat('en-US', { ...options, timeZone }).format(date);
}

function formatDateInTimezone(timestamp, timezoneOffsetInSeconds) {
    const date = new Date(timestamp + timezoneOffsetInSeconds * 1000);
  
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
    };
  
    const timeZone = 'UTC';

    return new Intl.DateTimeFormat('en-US', { ...options, timeZone }).format(date);
}

const Clock = ({ data }) => {
    const timestamp = Date.now();
    return(
        <div className="container4" id="clock">
            <p>{data.name ? <span>{data.name}</span> : null}</p>
            <p><span>{data.timezone ? formatTimeInTimezone(timestamp, data.timezone) : (data.timezone === 0 ? formatTimeInTimezone(timestamp, data.timezone) : null)}</span></p>
            <p><span>{data.timezone ? formatDateInTimezone(timestamp, data.timezone) : (data.timezone === 0 ? formatDateInTimezone(timestamp, data.timezone) : null)}</span></p>
        </div>
    )
}
export default Clock;