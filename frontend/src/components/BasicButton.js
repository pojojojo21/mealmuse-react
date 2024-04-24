import React from 'react';
import { Link } from 'react-router-dom';
import './BasicButton.css'
import CircleButton from './CircleButton';

function BasicButton({ buttonText, pageLink }) {
  const task = getTask(buttonText);

  return (
    <div className="button-div main">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CircleButton task={task} />
        <Link to={pageLink} className="basic-button">
          <span>
            {buttonText}:<br /><br />
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {buttonText} [+5] <img src={getImageSrc(buttonText)} alt={buttonText} width="100" height="100" />
            </span>
          </span>
          <span className="arrow" style={{ marginLeft: '20%' }}>&#8250;</span>
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
      return 'tacos'; // Example image source for Weekly Dish
    case 'weekly cuisine':
      return 'italian'; // Example image source for Weekly Cuisine
    case 'weekly ingredient':
      return 'lamb'; // Example image source for Weekly Ingredient
    default:
      return '';
  }
}

export default BasicButton;