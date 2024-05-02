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
            <span id="secondLine">
              {task}
              <img src={getImageSrc(buttonText)} alt={buttonText} width="20%" height="20%" />
              <span id='bonus' style={{ display: 'flex', alignItems: 'center' }}>
                +5<img src="Images/Fork.png" alt="" width="20vw" />
              </span>
            </span>
          </span>
          <span className="arrow" style={{ marginLeft: '0%' }}><img src='Images/Arrow.png' alt='arrow' height="50vh" /></span>
        </Link>
      </div>
    </div >
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