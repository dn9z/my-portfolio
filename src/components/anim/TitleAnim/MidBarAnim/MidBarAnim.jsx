import { useContext } from "react";
import { motion } from "framer-motion";
import './MidBarAnim.scss'
import { MyContext } from "../../../Context/Context";
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
const MidBarAnim = () => {

  const {location} = useContext(MyContext)

  // console.log(location.pathname)
  return (
    <motion.div
      className="title-bar"
      variants={barVariants}
      initial={location.pathname==='/'?'hidden':'transition'}
      animate="show"
      exit={location.pathname==='/'?'hidden':'transition'}
    ></motion.div>
  );
};

export default MidBarAnim;
