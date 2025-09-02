import React, { useState } from "react";

const About = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  
  const teamImages = [
    { src: "/team3.webp", alt: "Team Event 3" },
    { src: "/team4.webp", alt: "Team Event 4" },
    { src: "/team5.webp", alt: "Team Event 5" },
    { src: "/team6.webp", alt: "Team Event 6" },
    { src: "/team7.jpg", alt: "Team Event 7" }
  ];

  const nextTeamImage = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamImages.length);
  };

  const prevTeamImage = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length);
  };

  const goToTeamImage = (index) => {
    setCurrentTeamIndex(index);
  };

  return (
    <section className="about">
      <div className="about-hero">
        <div className="hero-content">
         
          <h1 className="hero-title">About EventEngineer360</h1>
          <p className="hero-subtitle">
            Crafting unforgettable experiences through strategic innovation, 
            creative storytelling, and flawless execution.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="story-section">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <div className="story-text">
              <p className="lead-text">
                At EventEngineer360, we transform visions into extraordinary realities. From electrifying 
                live concerts and prestigious government events to dynamic corporate gatherings, vibrant 
                college festivals, and innovative hybrid experiences—we orchestrate every detail with 
                precision and passion.
              </p>
              <p>
                Our collaborative approach ensures we understand your unique goals, audience, and vision. 
                Every event becomes a masterpiece of meticulous planning fused with creative innovation—
                featuring live entertainment, interactive experiences, artistic décor, professional audio-visual 
                production, and memorable surprises.
              </p>
              <p>
                Our mission is crystal clear: deliver premium, comprehensive solutions that energize audiences, 
                engage participants, and create lasting impressions. Your event isn't just managed—it's 
                engineered to perfection.
              </p>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title centered">Why EventEngineer360</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Strategic Approach</h3>
              <p>Strategy-first planning with creative storytelling and seamless execution powered by experienced producers and coordinators.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎪</div>
              <h3>Complete Solutions</h3>
              <p>End-to-end production, stage design, artist management, AV systems, vendor coordination, and guest experience management.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Trusted Excellence</h3>
              <p>Reliable delivery, transparent processes, and single-point accountability ensuring every event feels effortless and exceptional.</p>
            </div>
          </div>
        </div>

        <div className="founder-gallery-section">
          <div className="founder-section">
            <div className="founder-content">
              <div className="founder-image">
                <img src="/ankit.webp" alt="Ankit - Founder & CEO" />
                <div className="founder-badge">Founder & CEO</div>
              </div>
              <div className="founder-details">
                <h3>Meet Ankit</h3>
                <p className="founder-title">Visionary Leader</p>
                <blockquote className="founder-quote">
                  "My vision is to transform every event into an extraordinary experience. 
                  At EventEngineer360, we don't just organize events—we engineer memories 
                  that resonate for a lifetime."
                </blockquote>
                <p className="founder-bio">
                  With extensive experience in event management, Ankit founded EventEngineer360 
                  to bridge imagination and reality, driven by unwavering commitment to excellence 
                  and client satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="gallery-section">
            <h3 className="gallery-title">Event Showcase</h3>
            
            <div className="team-carousel">
              <div className="carousel-container">
                <button className="carousel-btn prev-btn" onClick={prevTeamImage}>
                  <span>‹</span>
                </button>
                
                <div className="carousel-main">
                  <div className="carousel-image-container">
                    <img 
                      src={teamImages[currentTeamIndex].src} 
                      alt={teamImages[currentTeamIndex].alt}
                      className="carousel-image"
                    />
                    <div className="carousel-overlay">
                      <span>{teamImages[currentTeamIndex].alt}</span>
                    </div>
                  </div>
                </div>
                
                <button className="carousel-btn next-btn" onClick={nextTeamImage}>
                  <span>›</span>
                </button>
              </div>
              
              <div className="carousel-indicators">
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentTeamIndex ? 'active' : ''}`}
                    onClick={() => goToTeamImage(index)}
                  />
                ))}
              </div>
              
              <div className="carousel-counter">
                {currentTeamIndex + 1} / {teamImages.length}
              </div>
            </div>

            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/Corporate.webp" alt="Corporate Events" />
                <div className="gallery-overlay">
                  <span>Corporate Events</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="/LIVE.webp" alt="Live Concerts" />
                <div className="gallery-overlay">
                  <span>Live Concerts</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="/Government.webp" alt="Government Events" />
                <div className="gallery-overlay">
                  <span>Government Events</span>
                </div>
              </div>
              <div className="gallery-item">
                <img src="/party.jpg" alt="Private Parties" />
                <div className="gallery-overlay">
                  <span>Private Parties</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partners-section">
          <h2 className="section-title centered">Trusted Partners</h2>
          <div className="partners-grid">
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/Logo.jpg" alt="EventEngineer360" />
              </div>
              <h4>EventEngineer360</h4>
              <p>Leading Event Management</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo premium-venues">
                <span>VENUE</span>
              </div>
              <h4>Premium Venues</h4>
              <p>Exclusive Location Partners</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo tech-solutions">
                <span>TECH</span>
              </div>
              <h4>Tech Solutions</h4>
              <p>Audio Visual Partners</p>
            </div>
            <div className="partner-card">
              <div className="partner-logo catering-services">
                <span>CATERING</span>
              </div>
              <h4>Catering Services</h4>
              <p>Premium Food Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
