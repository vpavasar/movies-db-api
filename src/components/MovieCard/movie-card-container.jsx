import React from "react";
import './movie-card.css';
import MovieCardView from "./movie-card-view";

function MovieCardContainer(props) {
    const {movie, changeModelWindowFilm} = props;
    const poster_path = movie.poster_path;
    const original_title = movie.original_title;
    const release_date = new Date(movie.release_date);

    const onClick = () => {
        changeModelWindowFilm(movie);
    };

    return <MovieCardView poster_path={poster_path}
                          original_title={original_title}
                          release_date={release_date}
                          onClick={onClick}/>
}

export default MovieCardContainer;