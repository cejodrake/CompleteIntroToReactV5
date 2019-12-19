import React, { useState } from 'react';
import { ANIMALS } from "@frontendmasters/pet"


const SearchParams = () => {
    const [location, setLocation] = useState("Seatle,Wa");
    const [animal, setAnimal] = useState("dog");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    <h1>{location}</h1>
                    <input id="location"
                        value={location}
                        placeholder="Location"
                        onChange={e => setLocation(e.target.value)} />

                </label>

                <label htmlFor="animal">
                    ANIMALS
                    <select id="animal" value={animal} onChange={e => setAnimal(e.target.value)} onBlur={e => setAnimal(e.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => (<option key={animal} value={animal}> {animal}</option>))}
                    </select>
                </label>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default SearchParams;
