import React, { useState, useEffect } from 'react';
import { getDishByName, updateDishStatus } from "../../crud"
import { Link } from 'react-router-dom';
import "./Dish.css"
import JSConfetti from 'js-confetti'

function DishPage({ dishLink, dishName, backlink, newDishPage }) {
  const [dish, setDish] = useState({});
  const [dish_ingredients, setIngredients] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const jsConfetti = new JSConfetti()

  useEffect(() => {
    console.log(dishName);
    newDishPage(dishName, backlink);

    const fetchData = async () => {
      try {
        const response = await getDishByName(dishName);

        setDish(response);
        setCompleted(response.status);
        setIngredients(response.ingredients);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the async function
    fetchData();
  }, [dishName, backlink, newDishPage]);

  const handleClickComplete = async () => {
    try {
      await updateDishStatus(dishName);
      setCompleted(!completed);

      if (!completed) {
        jsConfetti.addConfetti()
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClickFavorite = () => {
    setFavorited(!favorited);
  };

  return (
    <div className="dish-page">
      <div>
        <Link to={backlink}>
          <span className="back-arrow" ><img src='Images/BackArrow.png' alt='arrow' height="50vh" /></span>
        </Link>
        <h2>{dishName}</h2>
      </div>
      <div className="content">
        <div className="image-container">
          <img src={`Images/Dishes/${dishName.replace(/\s/g, '')}.png`} alt={dishName} width="150vw" />
        </div>
        <span className="points">{dish.points} pts</span>
        <div className="ingredients">
          <h3>Ingredients</h3>
          {dish_ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </div>
        <div>
          <button className={completed ? 'complete-button clicked' : 'complete-button'} onClick={handleClickComplete}>{completed ? 'Completed' : 'Complete'}</button>
        </div>
        <div>
          <button className={favorited ? 'favorite-button clicked' : 'favorite-button'} onClick={handleClickFavorite}>{favorited ? 'Favorited' : 'Add to favorites'}</button>
        </div>
      </div>
    </div>
  );
}

export default DishPage;