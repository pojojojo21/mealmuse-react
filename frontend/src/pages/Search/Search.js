import React, { useState, useEffect } from 'react';
import { getDishes } from "../../crud"
import GenericButton from '../../components/GenericButton';
import "./Search.css"
import SearchInput from './SearchInput';


function Search({ setActiveLink, newDishPage, searchInput }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setActiveLink("/search");
    const fetchData = async () => {
      try {
        const response = await getDishes();
        const dishes = response.dishes;
        setSearchResults(dishes);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
    //   setSearchValue(searchInput || '');
    //   const fetchData = async () => {
    //     try {
    //       const response = await getDishes(searchInput || '');
    //       const dishes = response.dishes;
    //       setSearchResults(dishes);

    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };

    //   fetchData();
    // }, [setActiveLink, searchInput, searchResults]);
  }, [setActiveLink]);

  const handleSearch = async (event) => {
    const searchQuery = event.target.value;
    setSearchValue(searchQuery);

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
        <SearchInput value={searchValue} onChange={handleSearch} />
      </div>

      {searchResults.map((dish, index) => (
        <GenericButton key={index} to={dish.name} newDishPage={newDishPage}>
          {dish.name}
        </GenericButton>
      ))}

    </div>
  );
}

export default Search;