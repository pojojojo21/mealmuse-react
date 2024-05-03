import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

import Home from './pages/Home/Home'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'
import DishPage from "./pages/Search/Dish";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompletedDishes from './pages/Profile/CompletedDishes';

function App() {

  // const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  const [dish, setDish] = useState('Ground Beef Tacos');
  const [dishLink, setdishLink] = useState(dish.toLowerCase().replace(/\s/g, ''));
  const [backLink, setBackLink] = useState('/');

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (localStorage.getItem('dishPage') === null) {
      localStorage.setItem('dishPage', 'Ground Beef Tacos');
    }

    localStorage.removeItem('user')
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify({ 'userName': 'Joanna', 'points': 120 }));
      console.log('print');
    }

    setDish(localStorage.getItem('dishPage'));
    setdishLink(dish.toLowerCase().replace(/\s/g, ''));
  }, [setDish, dish, dishLink, setdishLink]);

  function newDishPage(name, backLink) {
    setDish(name);
    setdishLink(name.toLowerCase().replace(/\s/g, ''));
    setBackLink(backLink);
    setActiveLink(backLink);

  }

  return (
    <div className="App">
      <Header />

      <Router>
        <div>
          <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
          <div className='main'>
            <Routes >
              <Route exact path="/" element={<Home setActiveLink={setActiveLink} newDishPage={newDishPage} setSearchValue={setSearchValue} />} />
              <Route path={`/${dishLink}`} element={<DishPage dishLink={dishLink} dishName={dish} backlink={backLink} newDishPage={newDishPage} />} />
              <Route path="/leaderboard" element={<Leaderboard setActiveLink={setActiveLink} />} />
              <Route path="/profile" element={<Profile setActiveLink={setActiveLink} />} />
              <Route path="/search" element={<Search setActiveLink={setActiveLink} newDishPage={newDishPage} searchInput={searchValue} />} />
              <Route path="/completeddishes" element={<CompletedDishes></CompletedDishes>}/>
            </Routes>
          </div>

        </div>
      </Router>
    </div>
  );
}

export default App;
