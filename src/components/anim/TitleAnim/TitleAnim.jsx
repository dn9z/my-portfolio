import { useContext } from "react";
import { motion } from "framer-motion";
import "./TitleAnim.scss";
import CharacterAnim from "./CharacterAnim";
import MidBarAnim from "./MidBarAnim/MidBarAnim";
import { MyContext } from "../../Context/Context";

const charVariants = {
  hidden: {
    display: "none",
    opacity: 0,
    scaleY: 0.8,
  },
  show: {
    display: "block",
    opacity: 1,
    scaleY: 1,
  },
  exit: {
    display: "none",
    opacity: 0,
  },
};

const cursorVariants = {
  hidden: {
    opacity: 0,
  },
  showDelay: {
    opacity: 0.18,
    transition: {
      delay: 2,
      duration: 0.8,
      repeat: Infinity,
    },
  },
  show: {
    opacity: 0.18,
    transition: {
      duration: 0.8,
      repeat: Infinity,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

const TitleAnim = ({ titleString, className, subTitleComp }) => {
  const { location } = useContext(MyContext);
  const titleContainerVariants = {
    show: {
      transition: {
        delayChildren: 3.6,
        // staggerChildren: 0.3,
        staggerChildren: location.pathname === "/" ? 0.3 : 0.2,
      },
    },
    showAbout: {
      transition: {
        delayChildren: 3.6,
        // staggerChildren: 0.3,
        staggerChildren: location.pathname === "/" ? 0.3 : 0.2,
      },
    },
    exit: {
      transition: {
        // delayChildren: 0.01,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="title-anim-wrapper">
      <div className={"title-anim-container " + className}>
        {/* *** Motion Bar *** */}
        <MidBarAnim />
        <motion.ul
          className="title"
          variants={titleContainerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="title-cursor-wrapper">
            {/* *** Main title *** */}
            {titleString.split("").map((ele, i) => {
              return ele === " " ? (
                <motion.div key={i} variants={charVariants}>
                  <motion.div className="whitespace"></motion.div>
                </motion.div>
              ) : (
                <motion.div key={i} variants={charVariants}>
                  <CharacterAnim char={ele} i={i} />
                </motion.div>
              );
            })}
            <motion.div
              // if on homepage, big cursor will disappear so there are not two
              initial={{ opacity: 1 }}
              animate={
                location.pathname === "/" && {
                  opacity: 0,
                  transition: { delay: 8, duration: 0 },
                }
              }
              exit={{ opacity: 1, transition: { duration: 0 } }}
            >
              <motion.div
                variants={cursorVariants}
                className="title-cursor"
                initial="hidden"
                animate={location.pathname === "/" ? "showDelay" : "show"}
                // exit={location.pathname === "/" && "exit"}
              ></motion.div>
            </motion.div>
          </div>
        </motion.ul>
        {subTitleComp && subTitleComp}
      </div>
    </div>
  );
};

export default TitleAnim;
