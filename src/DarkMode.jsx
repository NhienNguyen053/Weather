import React, { useEffect } from "react";
import './index.css';

function DarkMode({ isDarkMode, toggleDarkMode }) {
  const root = document.documentElement;
  useEffect(() => {
    if (isDarkMode) {
      // Light Mode
      root.style.setProperty('--background-gradient', 'linear-gradient(to right, #dbddde, #5a6166)');
      root.style.setProperty('--background-gradient2', 'linear-gradient(to right, #4b4b4b 0%, #a3a3a3 100%)');
      root.style.setProperty('--text-color1', 'black');
      root.style.setProperty('--input-color1', '#d9d9d9');
      root.style.setProperty('--placeholder-color', 'black');
      root.style.setProperty('--background-color1', '#d9d9d9');
      root.style.setProperty('--background-color2', 'linear-gradient(to bottom, #f49c39, #e6d3b6)');
      root.style.setProperty('--background-color3', 'linear-gradient(to bottom, #59567c, #9ba1ba)');
    } else {
      // Dark Mode
      root.style.setProperty('--background-gradient', 'linear-gradient(to right, #454545, #1e1e1e)');
      root.style.setProperty('--background-gradient2', 'linear-gradient(to right, #dadada 0%, #767676 100%)');
      root.style.setProperty('--text-color1', 'white');
      root.style.setProperty('--input-color1', '#444444');
      root.style.setProperty('--placeholder-color', 'gray');
      root.style.setProperty('--background-color1', '#444');
      root.style.setProperty('--background-color2', '#373636');
      root.style.setProperty('--background-color3', '#373636');
    }
  })

  return (
    <div className='container2' onClick={toggleDarkMode}>
      <div className={`circle1 ${isDarkMode ? 'dark' : ''}`}></div>
      <p className='p1'>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
    </div>
  );
}

export default DarkMode;
