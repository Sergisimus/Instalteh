import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='about_us_container'>
        <h1>About Us</h1>
        <div className='about_us_wrapper'>
          <div className='about_us_text'>
            Mi smo tim inženjera iz Rijeke koji iza sebe imaju mnoge projekte. <br></br>
          </div>
          <div className='about_us_image'>
            <img src='images/img-1.jpg'></img>
          </div>
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;