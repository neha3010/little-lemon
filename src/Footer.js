import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section company-info">
          <h4>Company Name</h4>
          <p>1234 Street Name, City, State, Zip Code</p>
          <p>Email: info@company.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="footer-section nav-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-section legal-info">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer