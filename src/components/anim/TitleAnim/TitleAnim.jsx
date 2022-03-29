import React from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import "./TitleAnim.scss";
import CharacterAnim from "./CharacterAnim";

const charVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const cursorVariants = {
  hidden: {
    opacity:0
  },
  show: {
    opacity:0.26,
    transition:{
      delay:2,duration:0.8,repeat: Infinity
    }
  },
}

const TitleAnim = ({ titleString, className }) => {
  return (
    <motion.ul
      className={"title " + className}
      transition={{ staggerChildren: 0.3 }}
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
        className="cursor"
        initial={{opacity:0}}
        animate={{opacity:0.26}}
        transition={{duration:0.8,repeat: Infinity}}
      ></motion.div>
    </motion.ul>
  );
};

export default TitleAnim;
