import React from "react";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const ButtonOfWatchlistView = (props) => {
    const {isMovieFromWatchlist,
        onClick} = props;

    const view = isMovieFromWatchlist ? <BookmarkIcon fontSize="small"/> : <BookmarkBorderIcon fontSize="small"/>;

    return (
        <div className='action-button' onClick={onClick} >
            {view}
        </div>
    );
};

export default ButtonOfWatchlistView;