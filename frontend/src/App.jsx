import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/services" element={<><Services /><Footer /></>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
