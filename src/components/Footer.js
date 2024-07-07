import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Adresa  <FontAwesomeIcon icon={faLocationDot} /></h2>
            <p>Bakarska 14, 51000 Rijeka</p>
          </div>
          <div className='footer-link-items'>
            <h2>Telefon <FontAwesomeIcon icon={faPhone} /></h2>
            <p>+385 98 765 4321</p><br/>
            <p>+385 91 234 5678</p> 
          </div>
          <div className='footer-link-items'>
            <h2>Email <FontAwesomeIcon icon={faEnvelope}/></h2>
            <p>john.doe@gmail.com</p> 
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              INSTALTEH
            </Link>
          </div>
          <small className='website-rights'>INSTALTEH © 2016</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
            <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;