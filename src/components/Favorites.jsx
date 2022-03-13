import React from "react";

const Favorites = ({ favorites, handleClick }) => {
  return (
    <div className="Favorites">
      Favorites
      {favorites.favoritesState.map((favorite) => (
        <ul className="item" key={"fav" + favorite.id}>
          <li>{favorite.name}</li>
          <button
            type="button"
            onClick={() => handleClick("REMOVE_FROM_FAVORITES", favorite.id)}
          >
            Remove
          </button>
        </ul>
      ))}
    </div>
  );
};

export default Favorites;
