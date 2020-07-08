import React from 'react';

function KeywordsFilterView(props) {
    const {onSubmit, onChange, inputValue} = props;

    return (
        <div className='keywordsFilter'>
            <p>Keywords</p>
            <div className='keywordsInputWrapper'>
                <form className='keywordsFilterForm' onSubmit={onSubmit}>
                    <input onChange={onChange} value={inputValue} placeholder="Filter by Keywords..."/>
                </form>
            </div>
        </div>
    );
}

export default KeywordsFilterView;