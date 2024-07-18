import React from 'react';
import '../styles/Header.css';
import logo from '/Users/nehabogireddy/little-lemon-app/src/images/Logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" className="logoImg" />
      </div>
      <nav>
        <ul className='nav-links'>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Log In</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;