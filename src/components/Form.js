import React, { useState } from "react";
import Error from "./Error";

const Form = ({search, setSearch, setQuery}) => {

    const [error, setError] = useState(false);

    // get city and country
    const {city, country} = search;

    // change handler
    const handleChange = e => {
        // update state
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    // submit handler
    const handleSubmit = e => {
        e.preventDefault();

        // validate
        if (!city.trim() || !country.trim()){
            setError(true);
            return
        }

        // main component
        setQuery(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            { error && <Error message="All fields are required"/>}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>

                <div className="input-field col s12">
                    <select
                        name="country"
                        id="country"
                        value={country}
                        onChange={handleChange}
                    >
                        <option value="">-- Select a country --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="country">Country: </label>
                </div>
            </div>
            
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Ask weather"
                    className="waves-effect waves-light btn-large yellow accent-4 btn-block"
                />
            </div>
        </form>
    )
}

export default Form;