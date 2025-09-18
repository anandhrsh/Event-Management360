import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    {
      subtitle: "Dream Maker",
      title: "Transform Your Vision Into Reality",
      description: "From intimate gatherings to grand celebrations, we craft unforgettable experiences that exceed expectations."
    },
    {
      subtitle: "Event Experts",
      title: "Where Every Detail Matters",
      description: "Professional event management with creative flair, ensuring your special moments become lasting memories."
    },
    {
      subtitle: "Experience Creators",
      title: "Your Story, Our Expertise",
      description: "Bringing together innovation, creativity, and flawless execution for events that inspire and delight."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero">
      <video
        src="https://cdn.pixabay.com/vimeo/460716/concert-460716.mp4?width=1280&hash=b0e5e1c8e4f4f4f4f4f4f4f4f4f4f4f4f4f4f4"
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        onError={(e) => {
          console.log('Video failed to load:', e);
          e.target.style.display = 'none';
        }}
      />

      <div className="hero-content">
        <div className="hero-text-container">
          <span className="hero-subtitle animate-fade">
            {heroTexts[currentText].subtitle}
          </span>
          <h1 className="hero-title animate-slide-up">
            {heroTexts[currentText].title}
          </h1>
          <p className="hero-description animate-fade-delay">
            {heroTexts[currentText].description}
          </p>

          <div className="hero-cta-container">
            <RouterLink to="/contact" className="cta-primary">
              <span>Book Your Event</span>
              <i className="cta-icon">→</i>
            </RouterLink>
            <RouterLink to="/services" className="cta-secondary">
              <span>Explore Services</span>
            </RouterLink>
          </div>
        </div>

        <div className="hero-indicators">
          {heroTexts.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentText ? 'active' : ''}`}
              onClick={() => setCurrentText(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
