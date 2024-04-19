import React, { useState } from 'react';

import GenericButton from '../../components/GenericButton';
import "./Search.css"

function Search() {
  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    console.log(searchQuery);
    // Call your search function here with the current value in the input
    // For example:
    // searchFunction(searchQuery);
  };

  return (
    <div className="button-div">
      <div className="button-not-clickable">
        Search
        <div>
          <input
            type="text"
            id="textInput"
            className="search-input"
            placeholder='Search for dishes, cuisines, and ingredients'
            onChange={handleSearch}
          />
        </div>
      </div>

      <GenericButton to={'tacos'}>
        Tacos
      </GenericButton>

      <GenericButton to={'sushi'}>
        Sushi
      </GenericButton>

      <GenericButton to={'soup'}>
        Soup
      </GenericButton>

      <GenericButton to={'iceCream'}>
        Ice Cream
      </GenericButton>

    </div>
  );
}

export default Search;