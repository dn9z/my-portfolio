import React from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import "./TitleAnim.scss";
import CharacterAnim from "./CharacterAnim";

const charVariants = {
  hidden: {
    display: "none",
    opacity: 0,
  },
  show: {
    display: "block",
    opacity: 1,
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

const barVariants = {
  hidden: {
    y: "100vh",
  },
  show: {
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const subTitleCharVariants = {
  hidden: {
    display: "none",
    opacity: 0,
  },
  show: {
    display: "inline",
    opacity: 1,
  },
};

const TitleAnim = ({ titleString, className, subTitleString }) => {
  return (
    // *** Title Container ***
    <div className="title-anim-container">
      <motion.div
        className="title-bar"
        variants={barVariants}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.ul
        className={"title " + className}
        transition={{ delayChildren: 3.6, staggerChildren: 0.3 }}
        initial="hidden"
        animate="show"
      >
        {/* *** Motion Bar *** */}

        <div className="title-cursor-wrapper">
          {/* *** Main title *** */}
          {titleString.split("").map((ele, i) => {
            return (
              <motion.div key={i} variants={charVariants}>
                <CharacterAnim char={ele} i={i} />
              </motion.div>
            );
          })}
          {/* *** Cursor *** */}
          <motion.div
            variants={cursorVariants}
            className="title-cursor"
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, repeat: Infinity }}
          ></motion.div>
        </div>
        <motion.div
          className="subTitle"
          transition={{ delayChildren: 8.6, staggerChildren: 0.1 }}
          initial="hidden"
          animate="show"
        >
          {subTitleString.split("").map((ele, i) => {
            // console.log(subTitleString)
            return (
              <motion.span
                className="subTitle-char"
                variants={subTitleCharVariants}
                key={i}
              >
                {ele}
              </motion.span>
            );
          })}
          <motion.span
            variants={cursorVariants}
            className="subTitle-cursor"
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, repeat: Infinity }}
          ></motion.span>
        </motion.div>
      </motion.ul>
    </div>
  );
};

export default TitleAnim;
