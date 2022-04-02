import React from "react";
import "./About.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
const About = () => {
  return (
    <>
      <div className="about-main">
        
        <TitleAnim titleString={'About me'} className='about-title'/>
        
      </div>
    </>
  );
};

export default About;
