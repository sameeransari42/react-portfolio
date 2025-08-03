import React from 'react';
import '../styles/Intro.css';
import { assets } from '../assets/assets';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
          <span className='hello'>Hello,</span>
          <span className="introText">I'm <span className='introName'>Smith</span> <br />Website Designer</span>
          <p className='introPara'>I am a skilled and passionate web designer with experience in creating<br /> visually appealing and user-friendly websites.</p>
          
          <Link> <button className="btn"> <img src={assets.hireme} alt="Hire Me" className='btnImg' />Hire me</button> </Link>
        </div>
        <img src={assets.image} alt="Profile" className="profile-image" />
    </section>
  )
}

export default Intro;