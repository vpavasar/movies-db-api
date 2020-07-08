import React, {useState} from "react";
import './search-form.css';
import SearchFormView from "./search-form-view";

const SearchFormContainer = (props) => {
    const {setNewCurrentURL,
        changeControlPanelVisibilityStatus} = props;
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        const currentInputValue = event.target.value;
        setInputValue(currentInputValue);
    };

    const onSubmit = (event) => {
        const movieName = inputValue;

        setNewCurrentURL(`https://api.themoviedb.org/3/search/movie?api_key=da70999142590b2cd3ea6d77a0ac0b79&query=${movieName}`);
        setInputValue('');

        changeControlPanelVisibilityStatus(false);

        event.preventDefault();
    };


    return <SearchFormView onChange={onChange}
                           onSubmit={onSubmit}
                           inputValue={inputValue}/>;
};

export default SearchFormContainer;