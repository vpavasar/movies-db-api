import React, {useState} from "react";
import GenresFilterView from "./genres-filter-view";
import './genres-filter.css'

function GenresFilterContainer(props) {
    const {genres, onClickGenre} = props;

    return <GenresFilterView genres={genres} onClickGenre={onClickGenre}/>
}

export default GenresFilterContainer;