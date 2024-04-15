import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import BasicButton from '../../components/BasicButton';
import WeeklyDishPage from './WeeklyDishPage'; // Create WeeklyDishPage component
import WeeklyCuisinePage from './WeeklyCuisinePage'; // Create WeeklyCuisinePage component
import WeeklyIngredientPage from './WeeklyIngredientPage'; // Create WeeklyIngredientPage component
import "./Home.css"

// import { toggleCircle } from './index'; // Import toggleCircle function from index.js

function Home({ setIsHome }) {
  useEffect(() => {
    setIsHome(true);
    // Clean up function to set isHome to false when component is unmounted
    return () => setIsHome(false);
  }, [setIsHome]);

  return (
    <div>
      <Routes>
        <Route path="/weekly-dish" element={<WeeklyDishPage />} />
        <Route path="/weekly-cuisine" element={<WeeklyCuisinePage />} />
        <Route path="/weekly-ingredient" element={<WeeklyIngredientPage />} />
      </Routes>
      <div>
        <BasicButton buttonText="Weekly Dish" pageLink="/weekly-dish" />
        <BasicButton buttonText="Weekly Cuisine" pageLink="/weekly-cuisine" />
        <BasicButton buttonText="Weekly Ingredient" pageLink="/weekly-ingredient" />
      </div>
    </div>
  );
}

export default Home;