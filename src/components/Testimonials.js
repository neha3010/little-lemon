import React from 'react';
import '../styles/Testimonials.css';
import reviewerImage from '/Users/nehabogireddy/little-lemon-app/src/images/CustomerIcon.jpeg'; // Sample reviewer image

const testimonials = [
  {
    name: "John Doe",
    rating: "★★★★★",
    review: "Great food and excellent service!",
    image: reviewerImage
  },
  {
    name: "Jane Smith",
    rating: "★★★★☆",
    review: "The ambiance was lovely, and the food was delicious.",
    image: reviewerImage
  },
  {
    name: "Alice Johnson",
    rating: "★★★★★",
    review: "Absolutely loved the desserts!",
    image: reviewerImage
  },
  {
    name: "Michael Brown",
    rating: "★★★★☆",
    review: "A wonderful experience overall.",
    image: reviewerImage
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image} alt={`Reviewer ${testimonial.name}`} className="reviewer-image"/>
            <p className="rating">{testimonial.rating}</p>
            <p className="name">{testimonial.name}</p>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
