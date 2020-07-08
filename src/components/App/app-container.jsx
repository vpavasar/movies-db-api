import React, {useEffect, useState} from "react";
import './app.css';
import AppView from "./app-view";
import {API_KEY, MOVIES_REF} from "../../constants/config";

function AppContainer() {
    let [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [isLoadingMovies, setIsLoadingMovies] = useState(true);
    const [hasError, setErrors] = useState(false);
    const [movieOfModalWindow, setMovieOfModalWindow] = useState({});
    const [isVisibleMovieBox, setIsVisibleMovieBox] = useState(false);
    const [isVisibleControlPanel, setIsVisibleControlPanel] = useState(true);
    const [sortBy, setSortBy] = useState("popularity.desc");
    const [genres, setGenres] = useState("");

    const [currentRef, setCurrentRef] = useState(`${MOVIES_REF}?api_key=${API_KEY}&page=${currentPage}`);

    const changeCurrentURL = (fieldName, value) => {
        let newCurrentRef;
        const isCurrentRefContainKey = currentRef.includes(fieldName);

        if(fieldName !== 'page') {
            setMovies([]);
        }

        if(!isCurrentRefContainKey){
            newCurrentRef = `${currentRef}&${fieldName}=${value}`;
            setCurrentRef(newCurrentRef);
            return;
        }

        const partsOfRef = currentRef.split('&');
        const splittedRef = partsOfRef.map((partOfRef, index) => {
            if(index === 0) {
                return `${partOfRef}`;
            }

            const keyAndValue = partOfRef.split('=');
            const key = keyAndValue[0];
            if(key === fieldName){
                return `&${key}=${value}`;
            }

            return `&${partOfRef}`;
        });
        newCurrentRef = splittedRef.join('');
        setCurrentRef(newCurrentRef);
    };

    const fetchData = async () => {
        try{
            setIsLoadingMovies(true);

            const response = await fetch(currentRef);
            const data = await response.json();
            setMovies([...movies, ...data.results]);

            setIsLoadingMovies(false);
        }catch(err) {
            setErrors(err);
        }
    };

    const loadMoreMovies = (e) => {
        changeCurrentURL('page', currentPage + 1);
        setCurrentPage(currentPage + 1);
    };

    const changeSortBy = (sortByValue) => {
        setMovies([]);
        setCurrentPage(1);

        changeCurrentURL('page', 1);
        changeCurrentURL('sort_by', sortByValue);
    };

    const changeGenresList = (genresList) => {
        let newGenreListValue;

        if(genresList.length === 0) {
            newGenreListValue =  '';
        }else {
            newGenreListValue = genresList.join(',');
        }
        console.log(genresList);

        changeCurrentURL('with_genres', newGenreListValue);

        setMovies([]);
    };

    const changeUserScore = (score) => {
        const score_gte = score[0];
        const score_lte = score[1];

        setMovies([]);

        changeCurrentURL('vote_average.gte', score_gte);
        changeCurrentURL('vote_average.lte', score_lte);
    };

    const changeMinUserVoteCount = (voteCount) => {
        setMovies([]);

        changeCurrentURL('vote_count.gte', voteCount);
    };

    const changeRunTime = (runTimeRange) => {
        const runtime_gte = runTimeRange[0];
        const runtime_lte = runTimeRange[1];

        setMovies([]);

        changeCurrentURL('with_runtime.gte', runtime_gte);
        changeCurrentURL('with_runtime.lte', runtime_lte);
    };

    const changeModelWindowFilm = (movie) => {
        setMovieOfModalWindow(movie);
        setIsVisibleMovieBox(true);
    };

    const changeControlPanelVisibilityStatus = (isVisible) => {
        setIsVisibleControlPanel(isVisible);
    };

    const setNewCurrentURL = (url) => {
        setCurrentRef(url);
        setMovies([]);
        setCurrentPage(1);
    };

    const onClickHeaderMovieButton = () => {
        setNewCurrentURL(`${MOVIES_REF}?api_key=${API_KEY}`);
        changeControlPanelVisibilityStatus(true);
    };

    useEffect(() => {
        fetchData();
        console.log(currentRef);
    },[currentRef]);

    const onScroll = () => {
            const isScrolled = (document.documentElement.clientHeight + document.documentElement.scrollTop) === document.body.scrollHeight;

        if(isScrolled) {
            loadMoreMovies();
        }
    };
    document.body.onscroll = onScroll;

    return <AppView movies={movies}
                    movieOfModalWindow={movieOfModalWindow}
                    isLoadingMovies={isLoadingMovies}
                    isVisibleMovieBox={isVisibleMovieBox}
                    setIsVisibleMovieBox={setIsVisibleMovieBox}
                    changeModelWindowFilm={changeModelWindowFilm}
                    loadMoreMovies={loadMoreMovies}
                    changeSortBy={changeSortBy}
                    changeGenresList={changeGenresList}
                    changeUserScore={changeUserScore}
                    changeMinUserVoteCount={changeMinUserVoteCount}
                    changeRunTime={changeRunTime}
                    changeCurrentURL={changeCurrentURL}
                    setNewCurrentURL={setNewCurrentURL}
                    isVisibleControlPanel={isVisibleControlPanel}
                    changeControlPanelVisibilityStatus={changeControlPanelVisibilityStatus}
                    onClickHeaderMovieButton={onClickHeaderMovieButton}/>
}

export default AppContainer;