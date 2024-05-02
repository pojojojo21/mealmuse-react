import React from 'react';
import BasicButton from '../../components/BasicButton';
import StatusBar from '../../components/StatusBar';
import "./Home.css"

function Home({ setActiveLink, dishLink }) {

  return (
    <div>
      <div>
        <StatusBar />
        <BasicButton buttonText="Weekly Dish" pageLink={`/${dishLink}`} />
        <BasicButton buttonText="Weekly Cuisine" pageLink="/search" />
        <BasicButton buttonText="Weekly Ingredient" pageLink="/search" />
      </div>
    </div>
  );
}

export default Home;