import React from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import "./TitleAnim.scss";
import CharacterAnim from "./CharacterAnim";
import MidBarAnim from "../MidBarAnim/MidBarAnim";

const titleContainerVariants = {
  show: {
    transition: {
      delayChildren: 3.6,
      staggerChildren: 0.3,
    },
  },
  exit: {
    transition: {
      // delayChildren: 0.01,
      staggerChildren: 0.1,
    },
  },
};

const charVariants = {
  hidden: {
    display: "none",
    opacity: 0,
  },
  show: {
    display: "block",
    opacity: 1,
  },
  exit: {
    display: "none",
    opacity: 0,
  },
};

const cursorVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 0.26,
    transition: {
      delay: 2,
      duration: 0.8,
      repeat: Infinity,
    },
  },
};



const TitleAnim = ({ titleString, className, location }) => {
  console.log(location)
  return (
    <div className={"title-anim-container " + className}>
      {/* *** Motion Bar *** */}
      <MidBarAnim location={location}/>
      <motion.ul
        className="title"
        variants={titleContainerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="title-cursor-wrapper">
          {/* *** Main title *** */}
          {titleString.split("").map((ele, i) => {
            return (
              <motion.div key={i} variants={charVariants}>
                <CharacterAnim char={ele} i={i} />
              </motion.div>
            );
          })}
          <motion.div
            variants={cursorVariants}
            className="title-cursor"
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.ul>
    </div>
  );
};

export default TitleAnim;
