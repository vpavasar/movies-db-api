import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const ButtonOfFavoriteListView = (props) => {
    const {isFavoriteFilm,
        onClick} = props;

    const view = isFavoriteFilm ? <FavoriteIcon fontSize="small"/> : <FavoriteBorderIcon fontSize="small"/>;

    return (
        <div className='action-button' onClick={onClick}>
            {view}
        </div>
    );
};

export default ButtonOfFavoriteListView;