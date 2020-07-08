import React from "react";

function CharacterCardView(props) {
    const {character} = props;
    const mainProfilePath = `https://image.tmdb.org/t/p/w276_and_h350_face/${character.profile_path}`;
    const maleProfilePath = require('../../images/user-grey.svg');
    const femaleProfilePath = require('../../images/user-female.svg');
    const secondProfilePath = character.gender === 1 ? femaleProfilePath : maleProfilePath;
    const profilePath = character.profile_path ? mainProfilePath : secondProfilePath;

    return(
        <div className='character-card'>
            <div>
                <img src={profilePath}  className='character-card-img'/>
            </div>
            <p className='character-card-title'>{character.name}</p>
            <p className='character-card-date'>{character.character}</p>
        </div>
    );
}

export default CharacterCardView;