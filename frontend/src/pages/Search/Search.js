import React, { useState } from 'react';
import { getDishes } from "../../crud"
import GenericButton from '../../components/GenericButton';
import "./Search.css"

function Search() {
  const handleSearch = async (event) => { // Add async keyword here
    const searchQuery = event.target.value;
    // console.log(searchQuery);
    try {
      const response = await getDishes(searchQuery);
      const dishes = response.dishes
      dishes.forEach(dish => { // Remove ".array" here
        console.log(dish.name)
      });
    } catch (error) {
      console.error('Error:', error);
    }

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