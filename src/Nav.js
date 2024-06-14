import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav>
        <ul>
        <li><img src="/Users/nehabogireddy/little-lemon-app/src/images/Logo.svg" /></li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reserve">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Log In</a></li>
        </ul>
    </nav>
  )
}

export default Nav