import React from "react";
import "./About.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
const About = () => {
  return (
    <>
      <div className="about-main">
        <TitleAnim titleString={"About me"} className="about-title" />
        <div>
          <p>
            What I enjoy most is creating experiences, backed up by interaction
            and animation. I endorse efficiency and minimalistic approaches.
            Perfectionistic as I am, I also like working pixel perfect and I
            absolutely love putting effort into creating dynamic and reusable
            code.
          </p>
        </div>

        <div>
          <p>
            Professional: JavaScript, React, CSS/SASS, Express, MongoDB, Java,
            postgreSQL
          </p>
          <p>
            Experience: C/C++/C#, Unity, Autodesk Maya, Adobe Photoshop, Adobe
            Illustrator
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
