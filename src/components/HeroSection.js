import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  const date = new Date();
  const years = date.getFullYear() - 2005;

  return (
    <div className='hero-container'>
      <video /* poster='images/img-1.jpg' */ autoPlay loop muted playsInline>
        <source src='videos/video-1.mp4' type='video/mp4'/>     
        Not supported
      </video>
      {<h1>INSTALTEH</h1>}
      <p>Uspješno poslovanje već {years} godina!</p>
    </div>
  );
}

export default HeroSection;