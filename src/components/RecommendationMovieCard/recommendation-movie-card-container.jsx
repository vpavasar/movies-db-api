import React from "react";
import RecommendationMovieCardView from "./recommendation-movie-card-view";
import './recommendation-movie-card.css';

function RecommendationMovieCardContainer(props) {
    const {movie} = props;

    return <RecommendationMovieCardView movie={movie}/>
}

export default RecommendationMovieCardContainer;