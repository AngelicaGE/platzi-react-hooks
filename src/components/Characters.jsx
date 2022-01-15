import React, {useState, useEffect, useReducer} from 'react'

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
    
    // my effect
    // params: anonymous function for the logic, variable that listenes for a change
    // the array will be listening for changes in the effect and rerender when there is a change.
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(data => setCharacters(data.results));
    }, []);

    // my reducer
    const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

    const handleClick = (action, favorite )=> {
        dispatch({type: action, payload: favorite})
    }


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
            Characters:
            {characters.map(character => (
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
