import React from 'react';
import styles from './Conditions.module.css'

const conditions = ({weather, error, loading}) => {

    return (
        <div className={styles.Wrapper}>

            { /* if error catch is true (from Forecast component), then display this */
                error && <small className={styles.Small}>Please enter a valid city.</small>}

            {loading && <div className={styles.Loader} />}

            
            {weather.cod === 200 ?
                /* cod === 200 means the city is valid */
                <div>
                    <p><strong>{weather.name}</strong></p>
                    <p>It is currently {Math.round(weather.main.temp)} degrees out with {weather.weather[0].description}.</p>
                </div>
            : null
            }
        </div>
    )
}

export default conditions;