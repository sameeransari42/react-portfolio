import React from 'react';
import '../styles/Works.css';
import { assets } from '../assets/assets';

const Works = () => {
  return (
    <section id='works'>
        <span className="workTitle">My Portfolio</span>
        <span className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>

        <div className="workImgs">
            <img src={assets.portfolio_1} alt="Portfolio1" className="workImg" />
            <img src={assets.portfolio_2} alt="Portfolio2" className="workImg" />
            <img src={assets.portfolio_3} alt="Portfolio3" className="workImg" />
            <img src={assets.portfolio_4} alt="Portfolio4" className="workImg" />
            <img src={assets.portfolio_5} alt="Portfolio5" className="workImg" />
            <img src={assets.portfolio_6} alt="Portfolio6" className="workImg" />
        </div>
        
        <button className="seeMoreBtn">See more</button>
    </section>
  )
}

export default Works;