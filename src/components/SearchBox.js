import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa2 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search for your favorite Disney pal'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
