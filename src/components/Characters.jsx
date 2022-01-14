import React, {useState, useEffect} from 'react'

const Characters = () => {
    // my state
    const [characters, setCharacters] = useState([]);
    // my effect
    // params: anonymous function for the logic, variable that listenes for a change
    // the array will be listening for changes in the effect and rerender when there is a change.
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(data => setCharacters(data.results));
    }, []);

    return (
        <div className='Characters'>
            {characters.map(character => (
                <h2>{character.name}</h2>
            ))}   
        </div>
    );
}

export default Characters;
