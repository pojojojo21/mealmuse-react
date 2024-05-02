import React, { useState, useEffect } from 'react';
import { getDishByName } from "../../crud"
import { Link } from 'react-router-dom';
import "./Dish.css"

function DishPage({ dishLink, dishName, backlink }) {
  const [dish, setDish] = useState({});
  const [dish_ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Define async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await getDishByName(dishName);
        // console.log(response)
        setDish(response);
        setIngredients(response.ingredients);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the async function
    fetchData();
  }, [dishName]);

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
        <button className="complete-button">Complete</button>
        <button className="favorite-button">Add to favorites</button>
      </div>
    </div>
  );
}

export default DishPage;