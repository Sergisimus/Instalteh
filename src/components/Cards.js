import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='card_container_1'>
        <h1>O nama</h1>
        <div className='card_wrapper'>
          <div className='card_text_1'>
            Mi smo tim inženjera iz Rijeke koji iza sebe imaju mnoge projekte. <br></br>
          </div>
          <div className='card_image'>
            <CardItem
              src='images/img-1.jpg'
              text='Kontaktirajte nas'
              label='Kontakt'
              path='/contact'
            />
            {/* <img src='images/img-1.jpg'></img> */}
          </div>
        </div>
      </div>
      <div className='card_container_2'>
        <h1>Usluge</h1>
        <div className='card_wrapper'>
            <div className='card_image'>
              <CardItem
                src='images/img-1.jpg'
                text='Saznajte više o našim uslugama'
                label='Usluge'
                path='/services'
              />
            </div>
            <div className='card_text_2'>
              Nudimo usluge projektiranja, nadzora, izvođenja radova...Više o svemu pogledajte ovdje.
            </div>
        </div>
      </div>
      <div className='card_container_1'>
        <h1>Projekti</h1>
        <div className='card_wrapper'>
          <div className='card_text_1'>
            neki tekst
          </div>
          <div className='card_image'>
            <CardItem
              src='images/img-1.jpg'
              text='Saznajte više o našim projektima'
              label='Projekti'
              path='/projects'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;