import React from 'react';

import SearchIcon from '@material-ui/icons/Search';


import './search-button.styles.css'

const SearchButton = () => (
    // <div className="search-button">
    //     <SearchIcon/>
    //     <input 
    //         className="search" 
    //         type="text"
    //         placeholder="Search Facebook"
    //     />
    // </div>
    <div className="search-button">
        <input 
            type="text" 
            className="search"
            placeholder="Search Facebook"
        />
        <SearchIcon/>
    </div>
    
);

export default SearchButton;