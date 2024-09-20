import React from 'react';
import './Page1.css'; // Assuming you moved the CSS into this file
import profilePicture from './dp2.jpg'; // Update the path according to your project structure

const Portfolio = () => {
  return (
    <div className="container">
      <div className="top-left">PORTFOLIO.</div>
      <div className="center-content">
        <p>Hello Everyone.</p>
        <h1>I'M Yashira De Silva</h1>
        <a href="sample2.html" className="button">Start →</a>
      </div>
      <img src={profilePicture} alt="Profile Picture" />
      <div className="contact">
        <p>Contact Me</p>
        <a href="https://yashiradesilva.me">🌐</a>
        <a href="mailto:yashiradesilva@gmail.com">📧</a>
        <a href="tel:+94767871222">📞</a>
      </div>
    </div>
  );
};

export default Portfolio;
