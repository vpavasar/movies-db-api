import React, {useState} from "react";
import TrailerBoxView from "./trailer-box-view";
import './trailer-box.css';

const TrailerBoxContainer = (props) => {
    const {trailerId,
        isOpenTrailerBox,
        closeTrailer} = props;
    const trailerUrl = `https://www.youtube.com/embed/${trailerId}?controls=1`;

  return <TrailerBoxView trailerUrl={trailerUrl}
                         isOpenTrailerBox={isOpenTrailerBox}
                         closeTrailer={closeTrailer}/>;
};

export default TrailerBoxContainer;