import React from "react";
import { motion } from "framer-motion";
import './MidBarAnim.scss'
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
const MidBarAnim = () => {
  return (
    <motion.div
      className="title-bar"
      variants={barVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
    ></motion.div>
  );
};

export default MidBarAnim;
