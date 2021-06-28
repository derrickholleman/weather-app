import React, { useState } from 'react';
import Conditions from '../Conditions';
import {Button, Radio, textInput} from './Forecast.module.css';

const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e){
        e.preventDefault();
        /* fetching weather data */
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-key": "bd4eca8f7emsh0075a40e9413e85p10104djsn8a45d27746bf",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
    .then(response => response.json())
    .then(response => {
        setResponseObj(response);
    })
    .catch(err => {
        console.error(err);
    });
}

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <Conditions responseObj={responseObj} />

            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    className={textInput}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        className={Radio}                       
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        className={Radio}
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button type="submit" className={Button}>Get Forecast</button>
            </form>

        </div>
    )
}

export default Forecast;
