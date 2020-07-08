import React from "react";
import MovieCardContainer from "../MovieCard";
import MovieDescriptionBoxContainer from "../MovieDescriptionBox";
import SortPanelContainer from "../SortPanel";
import FiltersPanelContainer from "../FiltersPanel";
import SearchFormContainer from "../SearchForm";

function AppView(props) {
    const {movies,
        isLoadingMovies,
        isVisibleMovieBox,
        setIsVisibleMovieBox,
        movieOfModalWindow,
        changeModelWindowFilm,
        loadMoreMovies,
        changeSortBy,
        changeGenresList,
        changeUserScore,
        changeMinUserVoteCount,
        changeRunTime,
        changeCurrentURL,
        setNewCurrentURL,
        isVisibleControlPanel,
        changeControlPanelVisibilityStatus,
        onClickHeaderMovieButton,
    } = props;
    let movieCardCollection = null;

    if(movies.length){
        movieCardCollection = movies.map((movie, id) => {
            return (
                <MovieCardContainer key={movie.id}
                                    movie={movie}
                                    changeModelWindowFilm={changeModelWindowFilm}/>
            )
        })
    }

    const controlPanelElement = <div className='control-panel'>
                                    <SortPanelContainer changeSortBy={changeSortBy}/>
                                    <FiltersPanelContainer changeGenresList={changeGenresList}
                                                           changeUserScore={changeUserScore}
                                                           changeMinUserVoteCount={changeMinUserVoteCount}
                                                           changeRunTime={changeRunTime}
                                                           changeCurrentURL={changeCurrentURL}/>
                                </div>;
    const controlPanel = isVisibleControlPanel ? controlPanelElement : null;

    return (
        <div className="App">

            <div className='header'>
                <div className='header-menu'>
                    <div className='header-menu-nav-wrapper'>
                        <ul className='header-menu-nav'>
                            <li>
                                <a onClick={onClickHeaderMovieButton} href='#'>Movies</a>
                            </li>
                            <li>
                                <a href='#'>TV Shows</a>
                            </li>
                            <li>
                                <a href='#'>People</a>
                            </li>
                            <li>
                                <a href='#'>More</a>
                            </li>
                        </ul>
                    </div>

                    <SearchFormContainer setNewCurrentURL={setNewCurrentURL}
                                         changeControlPanelVisibilityStatus={changeControlPanelVisibilityStatus}/>
                </div>
            </div>

            <div className='content'>
                <div className='control-panel-wrapper'>
                    {controlPanel}
                </div>

                <div className='movies-container-wrapper'>
                    <div className='movies-container'>
                        {movieCardCollection}
                    </div>
                    <div className='moviesLoaderButton'>
                        <p onClick={loadMoreMovies}>Load More</p>
                    </div>
                </div>
            </div>

            <MovieDescriptionBoxContainer movieOfModalWindow={movieOfModalWindow}
                                          isVisibleMovieBox={isVisibleMovieBox}
                                          setIsVisibleMovieBox={setIsVisibleMovieBox}
                                          isLoadingMovies={isLoadingMovies}/>

        </div>
    );
}

export default AppView;