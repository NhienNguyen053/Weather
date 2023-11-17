import React, { useState } from "react";

function SearchBar({ onCityChange }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onCityChange(inputValue);
        }
    };

    const onclick = () => {
        onCityChange(inputValue);
    }

    return (
        <div className="container3">
            <i className="fa-solid fa-magnifying-glass" onClick={onclick}></i>
            <input
                type="text"
                className="input1"
                placeholder="Search for your preferred city..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default SearchBar;
