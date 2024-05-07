import React, { useState, useEffect } from 'react';
import './carousel.css'; // Import CSS for styling

const Carousel = () => {
  // Define images array with URLs
  const images = [
    '/caraousel1.jpg',
    '/carausel2.jpg',
    '/carausel3.png'
  ];

  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle navigation indicator click
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Custom time interval for changing images (in milliseconds)
  const intervalTime = 5000; // Change the duration as needed

  // Auto scroll interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime); // Use the custom interval time

    // Clean up the interval
    return () => clearInterval(interval);
  }, [images.length, intervalTime]); // Re-run effect when the number of images or interval time changes

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentImageIndex ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="maincarouseltitle text-overlay">
            <h2>Welcome to<br />Rapture Therapy Centre</h2>
            <button className="button">Book Appointment <i class="ri-stethoscope-line"></i></button>
          </div>
        </div>
      ))}
      {/* Navigation indicators outside the container */}
      <div className="navigation-indicators">
        {/* Map through images array to render navigation indicators */}
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentImageIndex ? 'indicator active' : 'indicator'}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
