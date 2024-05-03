import React, { useState } from 'react';
import './Carousel.css';

const slidesData = [
  {
    id: 1,
    imageUrl: "Images/Dishes/GroundBeefTacos.png",
    name: "Ground Beef Tacos",
    points: "25 points",
    completed: "Completed Feb 12",
    rating: "Rating: 3/5 stars"
  },
  {
    id: 2,
    imageUrl: "Images/Dishes/Bolognese.png",
    name: "Bolognese",
    points: "50 points",
    completed: "Completed Feb 18",
    rating: "Rating: 5/5 stars"
  },
  {
    id: 3,
    imageUrl: "Images/Dishes/CheeseFondue.png",
    name: "Cheese Fondue",
    points: "35 points",
    completed: "Completed Feb 20",
    rating: "Rating: 5/5 stars"
  },
  {
    id: 4,
    imageUrl: "Images/Dishes/Raclette.png",
    name: "Raclette",
    points: "25 points",
    completed: "Completed Feb 25",
    rating: "Rating: 2/5 stars"
  },
  {
    id: 5,
    imageUrl: "Images/Dishes/Ramen.png",
    name: "Ramen",
    points: "15 points",
    completed: "Completed Mar 2",
    rating: "Rating: 3/5 stars"
  },
  {
    id: 6,
    imageUrl: "Images/Dishes/Paella.png",
    name: "Paella",
    points: "50 points",
    completed: "Completed Mar 10",
    rating: "Rating: 5/5 stars"
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === slidesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <h1 className="text-center">Completed Dishes</h1>
      <div className="carousel">
        <button className="control prev" onClick={goPrevious}>&#10094;</button>
        <div className="slide">
          <img src={slidesData[currentIndex].imageUrl} alt="Dish" />
          <p className="name">{slidesData[currentIndex].name}</p>
          <p className="points">{slidesData[currentIndex].points}</p>
          <p className="completed">{slidesData[currentIndex].completed}</p>
          <p className="rating">{slidesData[currentIndex].rating}</p>
        </div>
        <button className="control next" onClick={goNext}>&#10095;</button>
      </div>
    </div>
  );
}

export default Carousel;