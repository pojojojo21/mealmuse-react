import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import BasicButton from '../../components/BasicButton';
import WeeklyDishPage from './WeeklyDishPage'; // Create WeeklyDishPage component
import WeeklyCuisinePage from './WeeklyCuisinePage'; // Create WeeklyCuisinePage component
import WeeklyIngredientPage from './WeeklyIngredientPage'; // Create WeeklyIngredientPage component
import StatusBar from '../../components/StatusBar';
import "./Home.css"

function Home() {

  return (
    <div>
      <Routes>
        <Route path="/weekly-dish" element={<WeeklyDishPage />} />
        <Route path="/weekly-cuisine" element={<WeeklyCuisinePage />} />
        <Route path="/weekly-ingredient" element={<WeeklyIngredientPage />} />
      </Routes>
      <div>
        <StatusBar />
        <BasicButton buttonText="Weekly Dish" pageLink="/weekly-dish" />
        <BasicButton buttonText="Weekly Cuisine" pageLink="/weekly-cuisine" />
        <BasicButton buttonText="Weekly Ingredient" pageLink="/weekly-ingredient" />
      </div>
    </div>
  );
}

export default Home;