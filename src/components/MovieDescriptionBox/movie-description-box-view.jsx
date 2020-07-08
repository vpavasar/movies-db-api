import React, {useState} from "react";
import CharacterCardContainer from "../CharacterCard";
import RecommendationMovieCardContainer from "../RecommendationMovieCard";
import ReviewCardContainer from "../ReviewCard";
import TrailerBoxContainer from "../TrailerBox";
import CircularProgressBoxContainer from "../CircularProgressBox";
import ButtonOfFavoriteListContainer from "../ButtonOfFavoriteList";
import ButtonOfWatchlistContainer from "../ButtonOfWatchlist";

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function MovieDescriptionBoxView(props) {
    const {movieDetails,
        closeModalWindow,
        cast,
        recommendations,
        videos,
        reviews,
        isVisibleMovieBox,
        isLoadingMovieInfo,
    } = props;

    const [isOpenTrailerBox, setIsOpenTrailerBox] = useState(false);

    const VisibilityValue = isVisibleMovieBox ? 'visible' : 'hidden';
    const PosterPath = movieDetails.poster_path;
    const Background = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetails.backdrop_path}`;
    const OriginalTitle = movieDetails.original_title;
    const Overview = movieDetails.overview;
    const ReleaseDate = new Date(movieDetails.release_date);
    const releaseDateToString = `${ReleaseDate.getMonth()}/${ReleaseDate.getDay()}/${ReleaseDate.getFullYear()} (US)`;
    const runtime = {
        hours: Math.floor(movieDetails.runtime/60),
        minutes: Math.round((movieDetails.runtime/60 - Math.floor(movieDetails.runtime/60)) * 60)
    };
    const tagline = movieDetails.tagline;
    let genresName;
    let genresString;
    if(!isLoadingMovieInfo){
        genresName = movieDetails.genres.map((genre)=>{
            return genre.name;
        });

        genresString = genresName.join(',');
    }

    const openTrailer = () => {
        setIsOpenTrailerBox(true);
    };

    const closeTrailer = () => {
        setIsOpenTrailerBox(false);
    };

    const click = (event) => {
        event.stopPropagation();
    };

    if(isLoadingMovieInfo){
        return null;
    }else{
        return(
            <div className='MovieDescriptionBoxWrapper' style={{visibility: VisibilityValue}} onClick={closeModalWindow}>

                <div className='MovieDescriptionBoxContent'>

                    <div className='backgroundWrapper' style={{backgroundImage: `url(${Background} )`,
                                                                backgroundPosition: 'center',
                                                                backgroundSize: 'cover',
                                                                backgroundRepeat: 'no-repeat'}}>
                        <div className='backgroundWrapperSecond'>
                            <div className='MovieDescriptionBox' onClick={click}>

                                <div>
                                    <div>
                                        <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${PosterPath}`}  className='movieDescriptionPoster'/>
                                    </div>
                                </div>

                                <div className='MovieDescriptionBoxInfo'>

                                    <div className='movieDescriptionTitle'>
                                        <h2>{OriginalTitle} <span>({ReleaseDate.getFullYear()})</span></h2>
                                    </div>

                                    <div className='MovieDescriptionBoxFacts'>
                                        <span>{releaseDateToString}</span>
                                        <span className='dotPoint'>.</span>
                                        <span>{genresString}</span>
                                        <span className='dotPoint'>.</span>
                                        <span>{`${runtime.hours}h ${runtime.minutes}m`}</span>
                                    </div>

                                    <div className='media-buttons' >
                                        <div className='user-score-info'>
                                            <CircularProgressBoxContainer reatimg={movieDetails.vote_average}/>
                                            <p>User Score</p>
                                        </div>

                                        <ButtonOfFavoriteListContainer id={movieDetails.id}/>
                                        <ButtonOfWatchlistContainer id={movieDetails.id}/>

                                        <div className='play-trailer'>
                                            <PlayArrowIcon/>
                                            <h4 onClick={openTrailer}> Play Trailer</h4>
                                        </div>
                                    </div>

                                    <div className='MovieDescriptionBoxTagLine'>
                                        <p>{tagline}</p>
                                    </div>

                                    <div className='movieDescriptionOverview'>
                                        <h3>Overview</h3>
                                        <p>
                                            {Overview}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='description-components-wrapper'>
                        <div className='cast' onClick={click}>
                            <div className='cast-title'>
                                <h3>Top Billed Cast</h3>
                            </div>
                            <div className='cards-wrapper'>
                                {cast.map(character => {
                                    return <CharacterCardContainer key={character.id} character={character}/>;
                                })}
                            </div>
                        </div>

                        <div className='recommendations' onClick={click}>
                            <div className='recommendations-title'>
                                <h3>Recommendations</h3>
                            </div>
                            <div className='recommendations-wrapper'>
                                {recommendations.map(movie => {
                                    return <RecommendationMovieCardContainer key={movie.id} movie={movie}/>;
                                })}
                            </div>
                        </div>

                        <div className='videos' onClick={click}>
                            <div className='videos-title'>
                                <h3>Videos ({videos.length})</h3>
                            </div>
                            <div className='videos-wrapper'>
                                {videos.map((trailer, index) => {
                                    const url = `https://www.youtube.com/embed/${trailer.key}?controls=1`;
                                    return(
                                        <div key={index} className='videoWrapper' >
                                            <iframe width="530" height="300" src={url}>
                                            </iframe>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='reviews' onClick={click}>
                            <div className='reviews-title'>
                                <h3>Reviews ({reviews.length})</h3>
                            </div>
                            <div className='reviews-wrapper'>
                                {/*{reviews.map(review => {*/}
                                {/*    return <ReviewCardContainer key={review.id} review={review}/>;*/}
                                {/*})}*/}
                                {reviews.length ? <ReviewCardContainer review={reviews[0]}/> : null}
                            </div>
                        </div>
                    </div>

                    <TrailerBoxContainer trailerId={videos[0].key}
                                         isOpenTrailerBox={isOpenTrailerBox}
                                         closeTrailer={closeTrailer}/>
                </div>

            </div>
        );
    }
}

export default MovieDescriptionBoxView;