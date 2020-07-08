import React, {useEffect, useState} from "react";
import FiltersPanelView from "./filters-panel-view";
import './filters-panel.css';

function FiltersPanelContainer(props) {
    const {changeGenresList,
        changeUserScore,
        changeMinUserVoteCount,
        changeRunTime,
        changeCurrentURL,
    } = props;
    const [genres, setGenres] = useState([{
        "id": -1,
        "name": "Loading"
    }]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genresURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=da70999142590b2cd3ea6d77a0ac0b79&language=en-US';

    const fetchGenres = async () => {
        const response = await fetch(genresURL);
        const data = await response.json();
        setGenres([...data.genres]);
    };

    const onClickGenre = (e) => {
        const genreId = e.target.id;
        if(selectedGenres.includes(genreId)){
            const newList = selectedGenres.filter(item => item !== genreId);
            setSelectedGenres(newList);
            changeGenresList(newList);
            e.target.classList.remove('selected-genre');
        }else {
            setSelectedGenres([...selectedGenres, genreId]);
            changeGenresList([...selectedGenres, genreId]);
            e.target.classList.add('selected-genre');
        }
        console.log(selectedGenres);
    };

    useEffect(() => {
        fetchGenres();
    },[]);

    return <FiltersPanelView genres={genres}
                             onClickGenre={onClickGenre}
                             changeUserScore={changeUserScore}
                             changeMinUserVoteCount={changeMinUserVoteCount}
                             changeRunTime={changeRunTime}
                             changeCurrentURL={changeCurrentURL}/>
}

export default FiltersPanelContainer;