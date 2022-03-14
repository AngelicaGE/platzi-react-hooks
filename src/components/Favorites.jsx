import React from "react";
import '../styles/Favorites.css'
import { Figure, CloseButton} from "react-bootstrap";

const Favorites = ({ favorites, handleClick, handleSearch }) => {
  return (
    <div className="Favorites container-fluid">
    <div className="hr-scroll row flex-nowrap">
      {favorites.favoritesState.map((favorite) => (
        <Figure  key={"fav" + favorite.id}>
          <CloseButton onClick={() => handleClick("REMOVE_FROM_FAVORITES", favorite.id)} />
        <Figure.Image
          width={90}
          height={90}
          alt={favorite.name}
          src={favorite.image}
          onClick={() => handleSearch(favorite.name)}
        />
        <Figure.Caption>
          {
          //favorite.name
          }
          </Figure.Caption>
      </Figure>
      ))}
    </div>
    </div>

  );
};

export default Favorites;
