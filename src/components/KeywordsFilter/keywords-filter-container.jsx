import React, {useState} from "react";
import KeywordsFilterView from "./keywords-filter-view";
import './keywords-filter.css'

function KeywordsFilterContainer(props) {
    const {changeCurrentURL} = props;
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        const currentInputValue = event.target.value;

        setInputValue(currentInputValue);
    };

    const fetchKeywordId = async (keyword) => {
        const fetchURL = `https://api.themoviedb.org/3/search/keyword?api_key=da70999142590b2cd3ea6d77a0ac0b79&query=${keyword}&page=1`;

        const response = await fetch(fetchURL);
        const data = await response.json();

        return data.results;
    };

    const onSubmit = (event) => {
        const keywords = inputValue.split(' ');

        let idList = getIdList(keywords);

        const separatedIdList = idList.join(',');
        changeCurrentURL('with_keywords', separatedIdList);

        setInputValue('');

        event.preventDefault();
    };

    const getIdList = (keywords) => {
        let idList = [];

        keywords.forEach((keyword) => {
            const keywordIdObjects = fetchKeywordId(keyword)

            const idCollection = keywordIdObjects.map((idObj)=>{
                return idObj.id;
            });

            idList = [...idList, ...idCollection];
        });

        return idList;
    };

    return <KeywordsFilterView inputValue={inputValue}
                               onChange={onChange}
                               onSubmit={onSubmit}/>
}

export default KeywordsFilterContainer;