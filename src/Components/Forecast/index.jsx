import React, { useState } from 'react';
import Conditions from '../Conditions';
import styles from './Forecast.module.css';

const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [weather, setWeather] = useState({});
    // escapes spaces when user is inputting city
    const uriEncodedCity = encodeURI(city);

    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    function getForecast(e){
        e.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }
        // Clear state in preparation for new data
        setError(false);
        setWeather({});
       
        setLoading(true);

        /* fetching weather data */
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-key": process.env.REACT_APP_API_KEY,
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                throw new Error()
            }
            setWeather(data); /* displays API fetch data as {data} */
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });
}

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>

            <Conditions 
            weather={weather}
            error={error}
            loading={loading} 
            // {JSON.stringify(weather)} - raw JSON data from weather api
            />

            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    className={styles.textInput}
                    onChange={(e) => setCity(e.target.value)}
                    />
                
                    <label>
                        <input
                            type="radio"
                            name="units"
                            className={styles.Radio}                       
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
                            className={styles.Radio}
                            checked={unit === "metric"}
                            value="metric"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                        Celsius
                    </label>
                
                <button type="submit" className={styles.Button}>Get Forecast</button>
            </form>

        </div>
    )
}

export default Forecast;
