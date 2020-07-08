import React, {useState} from "react";
import RuntimeFilterView from "./runtime-filter-view";
import './runtime-filter.css';

function RuntimeFilterContainer(props) {
    const {changeRunTime} = props;
    const [value, setValue] = React.useState([0, 400]);

    const handleChange = (event, newValue) => {
        setValue(newValue);

        changeRunTime(newValue);
    };

    return <RuntimeFilterView handleChange={handleChange} value={value}/>
}

export default RuntimeFilterContainer;