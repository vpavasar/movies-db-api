import React, {useState} from "react";
import ButtonOfFavoriteListView from "./button-of-favorite-list-view";
import './button-of-favorite-list.css';

const ButtonOfFavoriteListContainer = (props) => {
    const {id} = props;
    const [isSelected, setIsSelected] = useState(false);
    const favoriteMoviesList = localStorage.getItem('favoriteMoviesList') ? JSON.parse(localStorage.getItem('favoriteMoviesList')) : [];
    const isFavoriteFilm = favoriteMoviesList.includes(id) ? true : false;

    const addMovieInFavoriteList = () => {
        const updatedFavoriteList = [...favoriteMoviesList, id];

        localStorage.setItem('favoriteMoviesList', JSON.stringify(updatedFavoriteList));

        setIsSelected(!isSelected);
    };

    const removeMovieFromFavoriteList = () => {
        const updatedFavoriteList = favoriteMoviesList.filter((currentId) => currentId !== id);

        localStorage.setItem('favoriteMoviesList', JSON.stringify(updatedFavoriteList));

        setIsSelected(!isSelected);
    };

    const onClick = isFavoriteFilm ? removeMovieFromFavoriteList : addMovieInFavoriteList;

    return <ButtonOfFavoriteListView isFavoriteFilm={isFavoriteFilm}
                                     onClick={onClick}/>;
};

export default ButtonOfFavoriteListContainer;