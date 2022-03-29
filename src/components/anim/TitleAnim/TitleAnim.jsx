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

const TitleAnim = ({ titleString, className }) => {
  return (
    <motion.ul
      className={"title " + className}
      transition={{ delayChildren: 3.6, staggerChildren: 0.3 }}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="title-bar"
        variants={barVariants}
        initial="hidden"
        animate="show"
      ></motion.div>
      {titleString.split("").map((ele, i) => {
        // console.log(ele)
        return (
          <motion.div variants={charVariants}>
            <CharacterAnim char={ele} i={i} />
          </motion.div>
        );
      })}
      <motion.div
      variants={cursorVariants}
        className="cursor"
        initial='hidden'
        animate='show'
        transition={{ duration: 0.8, repeat: Infinity }}
      ></motion.div>
    </motion.ul>
  );
};

export default TitleAnim;
