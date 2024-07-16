import React from 'react';
import '../styles/About.css';
import food from '/Users/nehabogireddy/little-lemon-app/src/images/Mario and Adrian A.jpg'; 
import restaurant from '/Users/nehabogireddy/little-lemon-app/src/images/restaurant.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <p className='place'>Chicago</p>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <p>Ullamcoestsi aliqua dolor do amet sint. Velit officia consequat duis enim mollit.</p>
      </div>
      <div className="about-images">
        <img src={restaurant} alt="" className="image1" />
        <img src={food} alt="" className="image2" />
      </div>
    </section>
  );
}

export default About;
