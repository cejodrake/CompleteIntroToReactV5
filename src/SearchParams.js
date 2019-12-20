import React, { useState } from 'react';
import { ANIMALS } from "@frontendmasters/pet"
import useDropdown from './common/useDropdown';



const SearchParams = () => {
    const [location, setLocation] = useState("Seatle,Wa");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

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

                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default SearchParams;
