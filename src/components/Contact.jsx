import React from 'react'
import '../styles/Contact.css';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <section id="contact">
        <h1 className="contactTitle">Contact Me</h1>
          <p className="contactDesc">Please fill out the form below to discuss any work opportunities.</p>

          <form className="contactForm">

           <div className="contactInput">
             <input type="text" className="name" placeholder='Your Name' />
              <input type="email" className="email" placeholder='Your Email' />
              <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
           </div>

            <button className="submitBtn" type='submit' value='Send' >Submit</button>

            <div className="links">
              <img src={assets.facebook_icon} alt="Facebook" className='link' />
              <img src={assets.twitter} alt="Twitter" className='link' />
              <img src={assets.instagram} alt="instagram" className='link' />
              <img src={assets.youtube} alt="Youtube" className='link' />
            </div>

          </form>
          
    </section>
  )
}

export default Contact;