import React, { useState } from 'react';
import './Carousel.css';

const slidesData = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/seed/967/600",
    description: "Tacos",
    points: "12 points",
    completed: "Completed Feb 12",
    rating: "Rating: 4/5 stars"
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/seed/186/600",
    description: "Burgers",
    points: "15 points",
    completed: "Completed Feb 18",
    rating: "Rating: 5/5 stars"
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/seed/793/600",
    description: "Salad",
    points: "10 points",
    completed: "Completed Feb 20",
    rating: "Rating: 3/5 stars"
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
          <img src={slidesData[currentIndex].imageUrl} alt="Sample Image" />
          <p className="description">{slidesData[currentIndex].description}</p>
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