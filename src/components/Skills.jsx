import React from 'react';
import '../styles/Skills.css';
import { assets } from '../assets/assets';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>

        <div className="skillBars">

            <div className="skillBar">
                <img src={assets.ui_design} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Crafting intuitive and visually appealing user interfaces, while ensuring seamless user experiences for websites and applications.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={assets.website_design} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Designing modern, responsive, and user-friendly websites that effectively represent your brand and meet user needs.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={assets.app_design} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Creating engaging and functional mobile app interfaces tailored to different platforms like Android and iOS.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills;