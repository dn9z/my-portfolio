import React from 'react'
import './SubTitleAnim.scss'
import { motion, useAnimation, useMotionValue } from "framer-motion";
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
const SubTitleAnim = ({subTitleString}) => {
  return (
      <motion.div
            className="subTitle"
            transition={{ delayChildren: 8.6, staggerChildren: 0.08 }}
            initial="hidden"
            animate="show"
            exit={{ y: "100vh", transition: { duration: 2 } }}
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
              animate={{ opacity: 0.26 }}
              transition={{
                delay: 8.6,
                duration: 0.8,
                repeat: Infinity,
              }}
            ></motion.span>
          </motion.div>
  )
}

export default SubTitleAnim