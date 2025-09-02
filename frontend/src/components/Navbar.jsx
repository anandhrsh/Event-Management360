import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="brand">
        <img src="/Logo.jpg" alt="EventEngineer360 logo" className="brand-logo" />
        <span className="logo">EventEngineer360</span>
      </div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <RouterLink to="/" onClick={() => setShow(false)}>HOME</RouterLink>
        {location.pathname === "/" ? (
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            onClick={() => setShow(false)}
          >
            SERVICES
          </ScrollLink>
        ) : (
          <RouterLink to="/services" onClick={() => setShow(false)}>SERVICES</RouterLink>
        )}
        <RouterLink to="/about" onClick={() => setShow(false)}>ABOUT</RouterLink>
        <RouterLink to="/contact" onClick={() => setShow(false)}>CONTACT</RouterLink>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
