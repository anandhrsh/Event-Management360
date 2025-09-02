import React from "react";

const Footer = () => {
  return (
    <footer className="professional-footer">

      <div className="footer-gradient-bg">
        <div className="footer-container">

          <div className="footer-main">
            <div className="footer-section company-info">
              <div className="brand-text">
                <h1 className="footer-logo">EventEngineer360</h1>
                <p className="footer-tagline">Creating Unforgettable Moments</p>
              </div>
              <p className="company-description">
                Your premier destination for exceptional event planning and wedding coordination.
                We transform your vision into reality with precision, creativity, and passion.
              </p>
              <div className="social-links">
                <a href="#" className="social-link facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="footer-section quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>

            <div className="footer-section services-links">
              <h3>Our Services</h3>
              <ul>
                <li><a href="#live-concerts">Live Concerts</a></li>
                <li><a href="#government">Government Events</a></li>
                <li><a href="#corporate">Corporate Events</a></li>
                <li><a href="#college-fests">College Fests</a></li>
                <li><a href="#virtual-hybrid">Virtual & Hybrid Events</a></li>
                <li><a href="#mice">MICE</a></li>
              </ul>
            </div>

            <div className="footer-section newsletter">
              <h3>Stay Connected</h3>
              <p>Subscribe to our newsletter for exclusive updates and event planning tips!</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <span>Subscribe</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+91 93860 89306</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>teamevent360@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p>&copy; 2024 EventEngineer360. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-star star-1">✦</div>
          <div className="floating-star star-2">✧</div>
          <div className="floating-star star-3">✦</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
