import React, {useEffect, useState} from "react";
import MovieDescriptionBoxView from './movie-description-box-view';
import './movie-description-box.css';
import {API_KEY} from "../../constants/config";

function MovieDescriptionBoxContainer(props) {
    const {isVisibleMovieBox, setIsVisibleMovieBox, movieOfModalWindow, isLoadingMovies} = props;

    const [movieDetails, setMovieDetails] = useState({});
    const [cast, setCast] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [videos, setVideos] = useState([]);
    const [isLoadingMovieInfo, setIsLoadingMovieInfo] = useState(true);
    const [hasError, setErrors] = useState(false);
    const MOVIE_ID = movieOfModalWindow.id;


    const fetchMovieInfo = async () => {
        try{
            setIsLoadingMovieInfo(true);

            if(!isLoadingMovies){
                const responseOfMovieDetails = await fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`);
                const dataOfMovieDetails = await responseOfMovieDetails.json();
                setMovieDetails(dataOfMovieDetails);

                const responseOfCredits = await fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}`);
                const dataOfCredits = await responseOfCredits.json();
                setCast(dataOfCredits.cast);

                const responseOfRecommendations = await fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/recommendations?api_key=${API_KEY}&page=1`);
                const dataOfRecommendations = await responseOfRecommendations.json();
                setRecommendations(dataOfRecommendations.results);

                const responseOfReviews = await fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/reviews?api_key=${API_KEY}&page=1`);
                const dataOfReviews = await responseOfReviews.json();
                setReviews(dataOfReviews.results);

                const responseOfVideos = await fetch(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${API_KEY}`);
                const dataOfVideos = await responseOfVideos.json();
                setVideos(dataOfVideos.results);

                setIsLoadingMovieInfo(false);
            }
        }catch(err) {
            setErrors(err);
        }
    };

    useEffect(() => {
        fetchMovieInfo();
    },[movieOfModalWindow]);

    const closeModalWindow = (e) => {
        e.preventDefault();
        setIsVisibleMovieBox(false);
    };

    return <MovieDescriptionBoxView cast={cast}
                                    movieDetails={movieDetails}
                                    recommendations={recommendations}
                                    reviews={reviews}
                                    closeModalWindow={closeModalWindow}
                                    videos={videos}
                                    isVisibleMovieBox={isVisibleMovieBox}
                                    isLoadingMovieInfo={isLoadingMovieInfo}/>;
}

export default MovieDescriptionBoxContainer;