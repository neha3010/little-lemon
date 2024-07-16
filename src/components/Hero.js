import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <p className='place'>Chicago</p>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={require('/Users/nehabogireddy/little-lemon-app/src/images/restauranfood.jpg')} alt="Dish" />
      </div>
    </section>
  );
}

export default Hero;