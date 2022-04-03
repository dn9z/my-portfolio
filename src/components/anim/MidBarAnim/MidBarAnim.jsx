import React from "react";
import { motion } from "framer-motion";
import './MidBarAnim.scss'
const barVariants = {
  hidden: {
    y: "100vh",
  },
  transition:{
    y:'30rem',
  },
  show: {
    y: 0,
    transition: {
      duration: 2,
    },
  },
  exit:{
    y:'30rem',
    // transition: {
    //   duration: 2,
    // },
  }
};
const MidBarAnim = ({location}) => {
  // console.log(location)
  return (
    <motion.div
      className="title-bar"
      variants={barVariants}
      initial={location.pathname==='/'?'hidden':'transition'}
      animate="show"
      exit="exit"
    ></motion.div>
  );
};

export default MidBarAnim;
