import React from 'react';
import { Link } from 'react-router-dom';
import './BasicButton.css'
import CircleButton from './CircleButton';

function BasicButton({ buttonText, pageLink }) {
  const task = getTask(buttonText);
  // const [selectedDish, setSelectedDish] = React.useState('Tacos');
  // const [selectedCuisine, setSelectedCuisine] = React.useState('Italian');
  // const [selectedIngredient, setSelectedIngredient] = React.useState('Lamb');


  return (
    <div className="button-div main">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CircleButton task={task} />
        <Link to={pageLink} className="basic-button">
          <span>
            {buttonText}:<br />
            <span style={{ display: 'flex', alignItems: 'center', fontSize: '1.0rem' }}>
              {task} <span id='bonus'>[+5]</span> <img src={getImageSrc(buttonText)} alt={buttonText} width="35%" height="35%" />
            </span>
          </span>
          <span className="arrow" style={{ marginLeft: '0%' }}><img src='Images/Arrow.png' alt='arrow' width="15" /></span>
        </Link>
      </div>
    </div>
  );
}

function getImageSrc(buttonText) {
  // Implement logic to determine image source based on buttonText
  switch (buttonText.toLowerCase()) {
    case 'weekly dish':
      return 'Images/Dishes/Tacos.png'; // Example image source for Weekly Dish
    case 'weekly cuisine':
      return 'Images/Countries/Italy.png'; // Example image source for Weekly Cuisine
    case 'weekly ingredient':
      return 'Images/Ingredients/Lamb.png'; // Example image source for Weekly Ingredient
    default:
      return '';
  }
}

function getTask(buttonText) {
  // Implement logic to determine task based on buttonText
  switch (buttonText.toLowerCase()) {
    case 'weekly dish':
      return 'Tacos'; // Example image source for Weekly Dish
    case 'weekly cuisine':
      return 'Italian'; // Example image source for Weekly Cuisine
    case 'weekly ingredient':
      return 'Lamb'; // Example image source for Weekly Ingredient
    default:
      return '';
  }
}

export default BasicButton;