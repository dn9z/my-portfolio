import React from "react";
import "./TopAnim.scss";
import { motion, AnimatePresence } from "framer-motion";

const topAnimVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const TopAnim = () => {
  return (
    <div className="topAnim-container">
        <motion.div
          className="topAnim-moving-bar"
          variants={topAnimVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
    </div>
  );
};

export default TopAnim;
