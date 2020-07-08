import React from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CloseIcon from '@material-ui/icons/Close';

const TrailerBoxView = (props) => {
    const {trailerUrl,
        isOpenTrailerBox,
        closeTrailer} = props;

    const onClick = (event) => {
      event.stopPropagation();
    };

    const view = <div onClick={onClick} className='trailer-box-wrapper'>
        <div className='trailer-box'>
            <div className='trailer-box-header'>
                <h3>Play Trailer</h3>
                <CloseIcon className='close-trailer' onClick={closeTrailer} fontSize="large"/>
            </div>
            <div className='trailer-video'>
                <iframe width="960" height="540" src={trailerUrl}>
                </iframe>
            </div>
        </div>
    </div>

    const currentView = isOpenTrailerBox ? view : null;

    return currentView;
};

export default TrailerBoxView;