import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Contact() {
  return (
    <>
      <div className='contact'>
        <h3>Contact Us</h3>
        <form className='contact_form'>
          <div className='first_row'>
            <div className='first_row_item'>
              <label className='contact_name contact_item'>NAME</label>
              <input className='contact_name_input contact_input' name='name' type='text' placeholder='Name'></input>
            </div>
            <div className='first_row_item'> 
              <label className='contact_email contact_item'>EMAIL</label> 
              <input className='contact_email_input contact_input' name='email' type='email' placeholder='Email'></input>
            </div>           
          </div>          
          <label className='contact_subject contact_item'>SUBJECT</label> 
          <input className='contact_subject_input contact_input' name='subject' type='text' placeholder='Subject'></input>
          <label className='contact_message contact_item'>MESSAGE</label>  
          <textarea className='contact_message_input contact_input' type='text' placeholder='Message'></textarea>
{/*           <input className='contact_message_input' type='text' placeholder='Type your message here...'></input> */}
          <button className='contact_submit_button' type='submit'>Send message</button>
        </form>
      </div>  
      <Footer></Footer>
    </>
    
  );
}

export default Contact;