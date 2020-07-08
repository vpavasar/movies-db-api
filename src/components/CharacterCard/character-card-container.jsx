import React from "react";
import CharacterCardView from "./character-card-view";
import './character-card.css';

function CharacterCardContainer(props) {
    const {character} = props;

    return <CharacterCardView character={character}/>;
}

export default CharacterCardContainer;