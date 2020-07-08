import React from "react";

const SearchFormView = (props) => {
    const {onChange,
        onSubmit,
        inputValue} = props;

    return (
        <div className='header-search-form'>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={inputValue} placeholder="Search.."/>
            </form>
        </div>
    );
};

export default SearchFormView;