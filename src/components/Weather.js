import React from "react";
import PropTypes from "prop-types";

const Weather = ({result}) => {
    // get values
    const { name, main } = result;
    if (!name) return null;

    const kelvinOffset = 273.15;
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather in {name} is:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp-kelvinOffset).toFixed(1)} 
                    <span>&#x2103;  </span>
                </p>
                <p> Max. Temperature: 
                    {parseFloat(main.temp_max-kelvinOffset).toFixed(1)} 
                    <span>&#x2103;  </span>
                </p>
                <p>
                    Min. Temperature: 
                    {parseFloat(main.temp_min-kelvinOffset).toFixed(1)} 
                    <span>&#x2103;  </span>
                </p>
            </div>
        </div>
    )
};

export default Weather;

Weather.propTypes = {
    result: PropTypes.object.isRequired
}