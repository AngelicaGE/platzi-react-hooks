import { useState, useEffect } from "react";
// custom hooks: rools to build our own react hooks

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