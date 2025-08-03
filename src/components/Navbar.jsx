import React, { useState } from 'react';
import '../styles/Navbar.css';
import { assets } from '../assets/assets';
import { Link, scroller } from 'react-scroll';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <section id="top">
      <img src={assets.logo} alt="Logo" className="navbarLogo" />

      <div className="navbarMenu">
        <Link to='intro' spy={true} smooth={true}  offset={-100} duration={500} className="navbarLink" >Home</Link>
        <Link to='skills' spy={true} smooth={true}  offset={-50} duration={500} className="navbarLink" >About</Link>
        <Link to='works' spy={true} smooth={true}  offset={-50} duration={500} className="navbarLink" >Portfolio</Link>
        <Link to='clients' spy={true} smooth={true}  offset={-50} duration={500} className="navbarLink" >Clients</Link>
      </div>

      <button className="navbarContactBtn"
        onClick={() => { scroller.scrollTo('contact', { smooth: true, offset: -50,  duration: 500}) }} >
        <img src={assets.contact} alt="" className="navbar-contact-icon" /> Contact Me 
      </button>

      {/* Sidebar for small screen */}

      <img src={assets.menu} alt="sideMenu" className="sideMenuImg" onClick={() => setShowMenu(!showMenu)} />

      <div className="sideMenu" style={{display: (showMenu) ? 'flex' : 'none'}}>
        <Link to='intro' spy={true} smooth={true}  offset={-100} duration={500} className="sideMenuItem" onClick= {() => setShowMenu(false)} >Home</Link>
        <Link to='skills' spy={true} smooth={true}  offset={-50} duration={500} className="sideMenuItem" onClick= {() => setShowMenu(false)} >About</Link>
        <Link to='works' spy={true} smooth={true}  offset={-50} duration={500} className="sideMenuItem" onClick= {() => setShowMenu(false)} >Portfolio</Link>
        <Link to='clients' spy={true} smooth={true}  offset={-50} duration={500} className="sideMenuItem" onClick= {() => setShowMenu(false)} >Clients</Link>
        <Link to='contact' spy={true} smooth={true}  offset={-50} duration={500} className="sideMenuItem" onClick= {() => setShowMenu(false)} >Contact</Link>
      </div>
    </section>
  );
};

export default Navbar;
