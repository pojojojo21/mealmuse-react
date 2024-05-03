import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BasicButton.css'
import CircleButton from './CircleButton';
import { getRandomDish, getRandomCuisine, getRandomIngredient } from '../crud';

function BasicButton({ buttonText, newDishPage, setSearchValue }) {
  const task = getTask(buttonText);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonText.toLowerCase() === 'weekly dish') {
      newDishPage(task, '/');

      const pageLink = `/${task.toLowerCase().replace(/\s/g, '')}`;
      navigate(pageLink);
    } else {
      setSearchValue(task);
      const pageLink = ('/search');
      navigate(pageLink);
    }
  };

  return (
    <div className="button-div main">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CircleButton task={task} />
        <button className="basic-button" onClick={handleButtonClick}>
          <span>
            {buttonText}:<br />
            <span id="secondLine">
              {task}
              <img src={getImageSrc(buttonText, task)} alt={buttonText} width="20%" height="20%" />
              <span id='bonus' style={{ display: 'flex', alignItems: 'center' }}>
                +5<img src="Images/Fork.png" alt="" width="20vw" />
              </span>
            </span>
          </span>
          <span className="arrow" style={{ marginLeft: '0%' }}><img src='Images/Arrow.png' alt='arrow' height="50vh" /></span>
        </button>

      </div>
    </div >
  );
}

function getImageSrc(buttonText, task) {
  // Implement logic to determine image source based on buttonText
  switch (buttonText.toLowerCase()) {
    case 'weekly dish':
      return `Images/Dishes/${task.replace(/\s/g, '')}.png`;
    case 'weekly cuisine':
      return `Images/Countries/${task.replace(/\s/g, '')}.png`
    case 'weekly ingredient':
      return `Images/Ingredients/${task.replace(/\s/g, '')}.png`
    default:
      return '';
  }
}

function getTask(buttonText) {
  // Implement logic to determine task based on buttonText
  switch (buttonText.toLowerCase()) {
    case 'weekly dish':
      return getRandomDish();
    case 'weekly cuisine':
      return getRandomCuisine();
    case 'weekly ingredient':
      return getRandomIngredient();
    default:
      return '';
  }
}

export default BasicButton;