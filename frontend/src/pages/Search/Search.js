import React, { useState, useEffect } from 'react';
import { getDishes } from "../../crud"
import GenericButton from '../../components/GenericButton';
import "./Search.css"
import DishPage from './Dish';

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Define async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await getDishes();
        const dishes = response.dishes;
        setSearchResults(dishes);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  const handleSearch = async (event) => { // Add async keyword here
    const searchQuery = event.target.value;
    // console.log(searchQuery);
    try {
      const response = await getDishes(searchQuery);
      const dishes = response.dishes
      setSearchResults(dishes)
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
        <GenericButton key={index} to={dish.name}>
          {dish.name}
        </GenericButton>
      ))}

    </div>
  );
}

export default Search;