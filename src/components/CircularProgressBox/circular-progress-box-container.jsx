import React from "react";
import CircularProgressBoxView from "./circular-progress-box-view";
import './circular-progress-box.css';

const CircularProgressBoxContainer = (props) => {
    const {rating} = props;

    return <CircularProgressBoxView rating={rating}/>;
};

export default CircularProgressBoxContainer;