import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

import Home from './pages/Home/Home'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'
import DishPage from "./pages/Search/Dish";
import WeeklyCuisinePage from './pages/Home/WeeklyCuisinePage';
import WeeklyIngredientPage from './pages/Home/WeeklyIngredientPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // const location = useLocation();
  const [activeLink, setActiveLink] = useState('/home');

  const [dish, setdish] = useState('Ground Beef Tacos');
  const [dishLink, setdishLink] = useState(dish.toLowerCase().replace(/\s/g, ''));


  return (
    <div className="App">
      <Header />

      <Router>
        <div>
          <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
          <div className='main'>
            <Routes >
              <Route exact path="/" element={<Home setActiveLink={setActiveLink} dishLink={dishLink} />} />
              <Route path={`/${dishLink}`} element={<DishPage dishLink={dishLink} dishName={dish} backlink={'/'} />} />
              <Route path="/home/weekly-cuisine" element={<WeeklyCuisinePage />} />
              <Route path="/home/weekly-ingredient" element={<WeeklyIngredientPage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>

        </div>
      </Router>
    </div>
  );
}

export default App;
