import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from "@frontendmasters/pet"
import useDropdown from './common/useDropdown';

import Results from './Results'


const SearchParams = () => {
    const [location, setLocation] = useState("Seatle,Wa");
    const [breeds, setBreeds] = useState([]);

    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    const [pets, setPets] = useState([]);

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        });

        console.log(animals)
        setPets(animals || []);
    }


    useEffect(() => {
        setBreeds([]);
        setBreed();
        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error)

    }, [animal, setBreed, setBreeds]);

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }} >
                <label htmlFor="location">
                    <h1>{location}
                    </h1>
                    <input id="location"
                        value={location}
                        placeholder="Location"
                        onChange={e => setLocation(e.target.value)} />

                </label>

                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
            <Results pets={pets} />

        </div>
    )
}

export default SearchParams;
