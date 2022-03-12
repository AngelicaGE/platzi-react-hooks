import React, {useState, useEffect, useReducer, useMemo, useRef, useCallback} from 'react'
import '../styles/Characters.scss';
import Search from './Search';
//useCallback: Prevent unnecesary calculations in functions

const initialState = {
    favoritesState: []
}

//my reducer: in charge to add characters to 'favorites'
const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            console.log( ' ADD ' + action.payload.name);
            return {
                ...state,
                favoritesState: [...state.favoritesState, action.payload]
            };
        case 'REMOVE_FROM_FAVORITES':
            console.log( ' REMOVE ' + action.payload);
            return {
                ...state,
                favoritesState: state.favoritesState.filter(item => item.id !== action.payload)
            };
        default:
            return state;
            
    }
}


const Characters = () => {
    // my state
    const [characters, setCharacters] = useState([]);
    // my reducer
    const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
    // my memoization
    const [search, setSearch] = useState('');
    // my useRef
    const searchInput = useRef(null )
    
    // my effect
    // params: anonymous function for the logic, variable that listenes for a change
    // the array will be listening for changes in the effect and rerender when there is a change.
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(data => setCharacters(data.results));
    }, []);



    const handleClick = (action, favorite )=> {
        dispatch({type: action, payload: favorite})
    }


    //const handleSearch = () => {
    //    setSearch(searchInput.current.value)
    //}

    const handleSearch = useCallback(()=>{
        setSearch(searchInput.current.value)
    }, [])

    const filteredCharacters = useMemo(() =>
        characters.filter((character) => {
            return character.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
  )

    return (
        <div className='Characters'>
            Favorites:
            {favorites.favoritesState.map(favorite => (
                <ul className='item' key={'fav'+favorite.id}>
                    <li>{favorite.name}</li>
                    <button type="button" onClick={() => handleClick('REMOVE_FROM_FAVORITES', favorite.id)}>
                        Remove
                    </button>
                </ul>
            ))}   

            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}></Search>
           
            Characters:
            {filteredCharacters.map(character => (
                <div className='item' key={character.id}>
                    <h2>{character.name}</h2>
                    {
                        favorites.favoritesState.find(item => item.id === character.id) ?
                        <button type="button" onClick={() => handleClick('REMOVE_FROM_FAVORITES',character.id)}>
                            remove from favorites
                        </button>
                        :
                        <button type="button" onClick={() => handleClick('ADD_TO_FAVORITES',character)}>
                            Add to favorites
                        </button>
                    }
                </div>
            ))}   
        </div>
    );
}

export default Characters;
