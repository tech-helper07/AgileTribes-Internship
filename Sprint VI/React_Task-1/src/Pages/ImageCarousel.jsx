import React, { useState } from 'react';
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    'https://static.vecteezy.com/system/resources/thumbnails/055/937/104/small_2x/moraine-lake-banff-national-park-alberta-canada-photo.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/052/271/505/large/asteroids-and-planets-floating-in-the-galaxy-with-a-bright-sun-flare-and-cosmic-dust-highlighting-the-grandeur-of-the-universe-and-celestial-bodies-in-deep-space-video.jpg',
    'https://img.freepik.com/premium-photo/stunning-realistic-wallpaper-planet-starry-astrophotography-universe-cosmus-space-background-generative-ai_742252-11500.jpg?semt=ais_hybrid&w=740',
    'https://t4.ftcdn.net/jpg/06/99/32/57/360_F_699325739_MF6j03NOJ04yH4Pp6d4mNjDnmwYFdaCw.jpg',
    'https://t4.ftcdn.net/jpg/08/92/53/49/360_F_892534963_zyKSQH5Xw28Dd3Y3uyYsYqGWwDku2LRB.jpg'
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <h3 className="carousel-title"> Image Carousel</h3>
      <div className="carousel-wrapper">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        
        <button 
          onClick={prevImage}
          className="carousel-nav-btn prev"
        >
          ←
        </button>
        
        <button 
          onClick={nextImage}
          className="carousel-nav-btn next"
        >
          →
        </button>
        
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        
        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
