import React, {useState, useReducer, useMemo, useRef, useCallback} from 'react'
import Search from './Search';
import useCharacters from '../hooks/useCharacter';
import Favorites from './Favorites';
import Characters from './Characters';


const initialState = {
    favoritesState: []
}

const API = 'https://rickandmortyapi.com/api/character/';

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


const Landing = () => {
    // my reducer
    const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
    // my memoization
    const [search, setSearch] = useState('');
    // my useRef
    const searchInput = useRef(null )

    const characters = useCharacters(API);


    const handleClick = (action, favorite )=> {
        dispatch({type: action, payload: favorite})
    }

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
        <div className='Landing'>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}></Search>

            Favorites:
            <Favorites favorites={favorites} handleClick={handleClick}></Favorites>
           
            Characters:
            <Characters characters={filteredCharacters} favorites={favorites} handleClick={handleClick}></Characters>
        </div>
    );
}

export default Landing;
