import { useState, useEffect } from "react";
import Characters from "../components/Characters";
// custom hooks: rools to build our own react hooks
//'https://rickandmortyapi.com/api/character/'

const useCharacters = url => {
    const [characters, setCharacters] = useState([])


   useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCharacters(data.results));
    }, [url]);

    return characters;
}

export default useCharacters;