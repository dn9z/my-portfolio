import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
const About = () => {
  return (
    <motion.div className="component-container">
      <div className="about-main">
        <TitleAnim titleString={"About me"} className="about-title" />
        <motion.div
          className="description"
          initial={{
            // y: "100vh",
            opacity: 0,
            transform:
              "matrix3d(1,0,0.00,0,0.00,0.02,1.00,-0.002,0,-1,0.02,0,0,0,0,1)",
          }}
          animate={{
            // y: 0,
            opacity: 1,
            transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
            transition: { duration:1.5, delay: 6 },
          }}
          exit={{ y: "100vh" }}
        >
          <p>
            What I enjoy most is creating experiences backed up by interaction
            and animation. I endorse efficiency and prefer minimalistic
            approaches. Perfectionistic as I am, I also like working pixel
            perfect and I absolutely love putting effort into creating dynamic
            and reusable code.
          </p>
        </motion.div>

        <div className="skills-container">
          <motion.div
            className="skills"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 7 } }}
            exit={{ x: "100vw" }}
          >
            <span>Professional:</span>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>CSS/SASS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>postgreSQL</li>
            </ul>
          </motion.div>
          <motion.div
            className="skills"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 6.6 } }}
            exit={{ x: "100vw" }}
          >
            <span>Experience:</span>
            <ul>
              <li>C/C++/C#</li>
              <li>Unity</li>
              <li>Autodesk Maya</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
