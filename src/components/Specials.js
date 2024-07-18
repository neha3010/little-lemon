import React from 'react';
import '../styles/Specials.css';
import GreekSalad from '/Users/nehabogireddy/little-lemon-app/src/images/greekSalad.jpg';
import Bruschetta from '/Users/nehabogireddy/little-lemon-app/src/images/bruchetta.svg';
import LemonDessert from '/Users/nehabogireddy/little-lemon-app/src/images/lemonDessert.jpg';

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description: "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious, so I stick to it, just adding a handful of mint leaves for a fresh finishing touch.",
    image: GreekSalad
  },
  {
    title: "Bruschetta",
    price: "$9.99",
    description: "Bruschetta is a classic Italian appetizers that is easy to make at home. Toasted bread is topped with tomatoes, Parmesan cheese, garlic, and fresh basil. Use a high-quality balsamic vinegar for best results.",
    image: Bruschetta
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This layered lemon dessert is the perfect combination of sweet and tart, with a cookie-like crust, tangy cream cheese, lemon pudding, lemon curd, and whipped topping. ",
    image: LemonDessert
  }
];

const Specials = () => {
  return (
    <section className="specials">
      <div className='specials-header'>
        <h2>This week's Specials</h2>
        <button>Online Menu</button>
      </div>

      <div className="specials-list">
        {specials.map((special, index) => (
          <div key={index} className="special-item">
            <img src={special.image} alt={special.title} />
            <div className='special-title-price'>
              <h3>{special.title}</h3>
              <p className="price">{special.price}</p>
              </div>

            <p className="foodDescription">{special.description}</p>
            <p className="order-delivery">Order for delivery</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Specials;