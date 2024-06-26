import React, { useEffect } from 'react';
import BasicButton from '../../components/BasicButton';
import StatusBar from '../../components/StatusBar';
import "./Home.css"
import { returnWS } from "../../crud"

function Home({ setActiveLink, newDishPage, setSearchValue }) {

  useEffect(() => {
    setActiveLink('/');
  }, [setActiveLink]);

  const handleReturnWS = () => {
    returnWS(true);
    window.location.reload();
  };

  return (
    <div>
      <div>
        <button className="refresh" onClick={() => handleReturnWS()}></button>
        <StatusBar />
        <BasicButton buttonText="Weekly Dish" newDishPage={newDishPage} />
        <BasicButton buttonText="Weekly Cuisine" newDishPage={newDishPage} setSearchValue={setSearchValue} />
        <BasicButton buttonText="Weekly Ingredient" newDishPage={newDishPage} setSearchValue={setSearchValue} />
      </div>
    </div>
  );
}

export default Home;