import React from "react";

function MovieCardView(props) {
    const {poster_path, original_title, release_date, onClick} = props;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const month = months[release_date.getMonth()];
    const day = release_date.getDate();
    const year = release_date.getFullYear();
    const correct_original_title = original_title.length<=42 ? original_title : original_title.slice(0,40)+'...';


    const firstPosterPath = `https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`;
    const reservePosterPath = '../../images/picture-grey.svg';
    const posterPath = poster_path === null ? reservePosterPath : firstPosterPath;


    return (
        <div className='film-card'>
            <div>
                <img onClick={onClick} src={posterPath}  className='film-card-poster'/>
            </div>
            <p onClick={onClick} className='film-card-title'>{correct_original_title}</p>
            <p className='film-card-date'>{`${month} ${day}, ${year}`}</p>
        </div>
    );
}

export default MovieCardView;