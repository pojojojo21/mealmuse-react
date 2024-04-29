import React, { useState } from 'react';
import { getDishes } from "../../crud"
import GenericButton from '../../components/GenericButton';
import "./Search.css"

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => { // Add async keyword here
    const searchQuery = event.target.value;
    // console.log(searchQuery);
    try {
      const response = await getDishes(searchQuery);
      const dishes = response.dishes
      setSearchResults(dishes)
      dishes.forEach(dish => { // Remove ".array" here
        console.log(dish.name)
      });
    } catch (error) {
      console.error('Error:', error);
    }

  };

  return (
    <div className="search-container button-div">
      <div className="button-not-clickable">
        <div>
          <input
            type="text"
            id="textInput"
            className="search-input"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
      </div>

      {searchResults.map((dish, index) => (
        <GenericButton key={index} to={dish.name.toLowerCase()}> {/* Use dish name as button link */}
          {dish.name} {/* Display dish name as button text */}
        </GenericButton>
      ))}

    </div>
  );
}

export default Search;