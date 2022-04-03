import React from "react";
import "./TopBarAnim.scss";
import { motion, AnimatePresence } from "framer-motion";

const topBarAnimVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 2,
    },
  },
  exit: {
    x: "-20rem",
    transition: {
      duration: 2,
    },
  },
};

const TopBarAnim = () => {
  return (
    <motion.div
      className="topAnim-moving-bar"
      variants={topBarAnimVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    ></motion.div>
  );
};

export default TopBarAnim;
