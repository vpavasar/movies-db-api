import React, {useState} from "react";
import ButtonOfWatchlistView from "./button-of-watchlist-view";
import './button-of-watchlist.css';

const ButtonOfWatchlistContainer = (props) => {
    const {id} = props;
    const [isSelected, setIsSelected] = useState(false);
    const movieWatchlist = localStorage.getItem('movieWatchlist') ? JSON.parse(localStorage.getItem('movieWatchlist')) : [];
    const isMovieFromWatchlist = movieWatchlist.includes(id) ? true : false;

    const addMovieInWatchlist = () => {
        const updatedWatchlist = [...movieWatchlist, id];

        localStorage.setItem('movieWatchlist', JSON.stringify(updatedWatchlist));

        setIsSelected(!isSelected);
    };

    const removeMovieFromWatchlist = () => {
        const updatedWatchlist = movieWatchlist.filter((currentId) => currentId !== id);

        localStorage.setItem('movieWatchlist', JSON.stringify(updatedWatchlist));

        setIsSelected(!isSelected);
    };

    const onClick = isMovieFromWatchlist ? removeMovieFromWatchlist : addMovieInWatchlist;

    return <ButtonOfWatchlistView isMovieFromWatchlist={isMovieFromWatchlist}
                                  onClick={onClick}/>;
};

export default ButtonOfWatchlistContainer;