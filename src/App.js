import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

import Home from './pages/Home/Home'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  // const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [isHome, setIsHome] = useState('/');

  return (
    <div className="App">
      <Header isHome={isHome} ></Header>

      <Router>
        <div>
          <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
          <div className='main'>
            <Routes>
              <Route exact path="/" element={<Home setIsHome={setIsHome} />} />
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
