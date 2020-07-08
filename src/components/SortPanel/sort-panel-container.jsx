import React, {useState} from "react";
import SortPanelView from "./sort-panel-view";
import './sort-panel.css';

function SortPanelContainer(props) {
    const {changeSortBy} = props;

    const onChangeSelect = (event) => {
        const selectField = event.target;
        const sortBy = selectField.value;

        changeSortBy(sortBy);
    };

    return <SortPanelView onChangeSelect={onChangeSelect}/>
}

export default SortPanelContainer;