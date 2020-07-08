import React from "react";

function RecommendationMovieCardView(props) {
    const {movie} = props;
    const original_title = movie.original_title.length<=25 ? movie.original_title : movie.original_title.slice(0,23)+'...';

    const firstBackdropPath = `https://image.tmdb.org/t/p/w500_and_h282_face/${movie.backdrop_path}`;
    const reserveBackdropPath = '../../images/picture-grey.svg';
    const backdrop_path = movie.backdrop_path === null ? reserveBackdropPath : firstBackdropPath;

    return (
        <div className='recommendation-card'>
            <div>
                <img src={backdrop_path}  className='recommendation-card-img'/>
            </div>
            <div className='recommendation-card-info-wrapper'>
                <div className='recommendation-card-info'>
                    <div className='recommendation-card-title'>
                        <p>{original_title}</p>
                    </div>

                    <div className='recommendation-card-rating'>
                        <p>{`${movie.vote_average*10}%`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendationMovieCardView;