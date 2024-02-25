import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video poster='images/img-1.jpg' autoPlay loop muted playsInline>
        <source src='videos/video-1.mp4' type='video/mp4'/>     
        Not supported
      </video>
      <h1>INSTALTEH</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;