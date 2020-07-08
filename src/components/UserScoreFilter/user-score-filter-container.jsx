import React, {useState} from "react";
import UserScoreFilterView from "./user-score-filter-view";
import './user-score-filter.css';

function UserScoreFilterContainer(props) {
    const {changeUserScore,
        changeCurrentURL,
    } = props;
    const [value, setValue] = React.useState([0, 10]);

    const valuetext = (value) => {
        return `${value}`;
    };

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);

        changeUserScore(newValue);
    };

    return <UserScoreFilterView valuetext={valuetext} handleChange={handleChange} value={value}/>
}

export default UserScoreFilterContainer;