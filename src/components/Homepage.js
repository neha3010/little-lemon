// src/components/Homepage.js
import React from 'react';
// import Header from './Header';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <Header /> */}
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer/>

    </div>
  );
};

export default Homepage;
