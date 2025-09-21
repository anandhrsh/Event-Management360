import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";

const HeroSection = () => {
  // Image filenames expected to be in frontend/public/Pics/
  const images = [
    "11.webp",
    "22.webp",
    "33.webp",
    "44.webp",
    "55.webp",
    "66.webp",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const particlesRef = useRef([]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Increased to 5 seconds for better viewing

    return () => clearInterval(interval);
  }, [images.length]);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Initialize particles
  useEffect(() => {
    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      particlesRef.current = particles;
    };

    createParticles();
    setIsLoaded(true);
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      particlesRef.current = particlesRef.current.map(particle => ({
        ...particle,
        y: particle.y - particle.speed * 0.1,
        x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.1,
      }));

      // Reset particles that go off screen
      particlesRef.current = particlesRef.current.map(particle =>
        particle.y < -5 ? { ...particle, y: 105, x: Math.random() * 100 } : particle
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero hd-hero" id="hero" ref={heroRef}>
      {/* Floating Particles */}
      <div className="particles-container">
        {particlesRef.current.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      {/* Parallax Background Layers */}
      <div className="parallax-bg-layer"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
        }}>
      </div>

      {/* Enhanced Image Slider Background */}
      <div className="hero-slider hd-slider" aria-hidden="true">
        <div className="slider-container">
          {images.map((name, index) => (
            <div
              key={name}
              className={`slide hd-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: `scale(${index === currentSlide ? 1.05 : 1}) 
                           translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
              }}
            >
              <img
                src={`/Pics/${name}`}
                alt={`Event showcase ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="hd-image"
              />
              <div className="image-overlay"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Controls */}
        <button
          className="slider-nav prev hd-nav"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <span className="nav-icon">‹</span>
          <div className="nav-ripple"></div>
        </button>
        <button
          className="slider-nav next hd-nav"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <span className="nav-icon">›</span>
          <div className="nav-ripple"></div>
        </button>

        {/* Enhanced Dots Indicator */}
        <div className="slider-dots hd-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot hd-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="dot-inner"></div>
              <div className="dot-ripple"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Hero Content */}
      <div className="hero-content hd-content">
        <div className={`hero-text-container hd-text-container ${isLoaded ? 'loaded' : ''}`}>
          <span className="hero-subtitle animate-fade hd-subtitle">
            <span className="subtitle-text">Dream Maker</span>
            <div className="subtitle-underline"></div>
          </span>

          <h1 className="hero-title animate-slide-up hd-title">
            <span className="title-word" style={{ animationDelay: '0.2s' }}>Transform</span>
            <span className="title-word" style={{ animationDelay: '0.4s' }}>Your</span>
            <span className="title-word" style={{ animationDelay: '0.6s' }}>Vision</span>
            <span className="title-word" style={{ animationDelay: '0.8s' }}>Into</span>
            <span className="title-word highlight" style={{ animationDelay: '1s' }}>Reality</span>
          </h1>

          <p className="hero-description animate-fade-delay hd-description">
            From intimate gatherings to grand celebrations, we craft unforgettable experiences that exceed expectations.
          </p>

          <div className="hero-cta-container hd-cta-container">
            <RouterLink to="/contact" className="cta-primary hd-cta-primary">
              <span className="cta-text">Book Your Event</span>
              <i className="cta-icon">→</i>
              <div className="cta-glow"></div>
              <div className="cta-particles">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="cta-particle" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
            </RouterLink>

            <RouterLink to="/services" className="cta-secondary hd-cta-secondary">
              <span className="cta-text">Explore Services</span>
              <div className="cta-border-animation"></div>
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="ambient-lights">
        <div className="light light-1"></div>
        <div className="light light-2"></div>
        <div className="light light-3"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;
