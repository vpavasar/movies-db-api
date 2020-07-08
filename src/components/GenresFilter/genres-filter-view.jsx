import React from 'react';

function GenresFilterView(props) {
    const {genres, onClickGenre} = props;

    return (
        <div className='filter-genres'>
            <p>Genres</p>
            <div className='genres'>
                {
                    genres.map(genre => {
                        return <div key={genre.id} className='genre'>
                            <p id={genre.id} onClick={onClickGenre}>{genre.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default GenresFilterView;