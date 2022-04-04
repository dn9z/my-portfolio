import { useContext } from "react";
import "./TopBarAnim.scss";
import { motion, AnimatePresence } from "framer-motion";
import { MyContext } from "../../../Context/Context";

const topBarAnimVariants = {
  hidden: {
    x: "-100vw",
  },
  transition:{
    x: "-20rem",
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
  const location = useContext(MyContext)
  return (
    <motion.div
      className="topAnim-moving-bar"
      variants={topBarAnimVariants}
      initial={location.pathname==='/'?'hidden':'transition'}
      animate="visible"
      exit={location.pathname==='/'?'hidden':'transition'}
    ></motion.div>
  );
};

export default TopBarAnim;
