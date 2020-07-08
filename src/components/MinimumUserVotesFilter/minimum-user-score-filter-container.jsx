import React, {useState} from "react";
import MinimumUserScoreFilterView from "./minimum-user-score-filter-view";
import './minimum-user-score-filter.css';

function MinimumUserScoreFilterContainer(props) {
    const {changeMinUserVoteCount} = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

        changeMinUserVoteCount(newValue);
    };

    return <MinimumUserScoreFilterView handleChange={handleChange} value={value}/>
}

export default MinimumUserScoreFilterContainer;