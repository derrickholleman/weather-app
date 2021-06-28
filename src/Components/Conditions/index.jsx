import React from 'react';

const Conditions = (props) => {
    const {responseObj} = props;
    return (
        <div>
            {responseObj.cod === 200 ?
                /* if a valid response then */
                <div>
                    <p><strong>{responseObj.name}</strong></p>
                    <p>
                        It is currently 
                        {Math.round(responseObj.main.temp)} degrees out with {responseObj.weather[0].description}
                    </p>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;
