import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ScrollToTop from '../ScrollTop';

function Contact() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <div className='contact'>      
        <div className='form_wrapper'>
          <form className='contact_form'>
            <div className='contact_form_header'>
              <h1>Kontaktirajte nas</h1>
              <p>Imate pitanja? Obratite nam se za suradnju i odgovorit ćemo u najkraćem mogućem roku!</p>
            </div>
            <div className='first_row'>
              <div className='first_row_item'>
                <label className='contact_name contact_item'>IME</label>
                <input className='contact_name_input contact_input' name='name' type='text' placeholder='Ime'></input>
              </div>
              <div className='first_row_item'> 
                <label className='contact_email contact_item'>EMAIL</label> 
                <input className='contact_email_input contact_input' name='email' type='email' placeholder='Email'></input>
              </div>           
            </div>          
            <label className='contact_subject contact_item'>NASLOV</label> 
            <input className='contact_subject_input contact_input' name='subject' type='text' placeholder='Naslov'></input>
            <label className='contact_message contact_item'>PORUKA</label>  
            <textarea className='contact_message_input contact_input' type='text' placeholder='Poruka'></textarea>
            <button className='contact_submit_button' type='submit'>Pošalji</button>
          </form>
        </div>  
      </div>  
      <Footer></Footer>
    </>
    
  );
}

export default Contact;