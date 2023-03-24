import React, { useState } from "react";

const AnaSayfaSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      image:
        "https://haber.sakarya.edu.tr/wp-content/uploads/2022/01/953-scaled.jpg"
      
    },
    {
      image:
        "https://haber.sakarya.edu.tr/wp-content/uploads/2022/01/953-scaled.jpg"
      
    },
    {
      image:
        "https://haber.sakarya.edu.tr/wp-content/uploads/2022/01/953-scaled.jpg"
      
    },
  ];

  const handleNext = () => {
    setSlideIndex(slideIndex === slides.length - 1 ? 0 : slideIndex + 1);
  };

  const handlePrev = () => {
    setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);
  };
  

  return (
    <div className="slider">
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider__slide ${
              index === slideIndex ? "active" : ""
            }`}
          >
            <img src={slide.image} alt={slide.caption} />
            <div className="slider__caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <div className="slider__controls">
        <button onClick={handlePrev}></button>
        <button onClick={handleNext}></button>
      </div>
    </div>
  );
};

export default AnaSayfaSlider;
