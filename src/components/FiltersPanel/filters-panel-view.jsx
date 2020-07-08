import React from "react";
import UserScoreFilterContainer from "../UserScoreFilter";
import MinimumUserScoreFilterContainer from "../MinimumUserVotesFilter";
import RuntimeFilterContainer from "../RuntimeFilter";
import KeywordsFilterContainer from "../KeywordsFilter";
import DateFilterContainer from "../DateFilter";
import GenresFilterContainer from "../GenresFilter";

function FiltersPanelView(props) {
    const { genres,
        onClickGenre,
        changeUserScore,
        changeMinUserVoteCount,
        changeRunTime,
        changeCurrentURL,
    } = props;

    return (
        <div className='filters-container'>
            <div className='filters-container-title'>
                <h3>Filters</h3>
            </div>
            <DateFilterContainer changeCurrentURL={changeCurrentURL}/>

            <GenresFilterContainer genres={genres}
                              onClickGenre={onClickGenre}/>

            <UserScoreFilterContainer changeCurrentURL={changeCurrentURL}
                                      changeUserScore={changeUserScore}/>

            <MinimumUserScoreFilterContainer changeMinUserVoteCount={changeMinUserVoteCount}/>

            <RuntimeFilterContainer changeRunTime={changeRunTime}/>

            <KeywordsFilterContainer changeCurrentURL={changeCurrentURL}/>
        </div>
    );
}

export default FiltersPanelView;