import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MidBarAnim.scss";
import { MyContext } from "../../../Context/Context";
import { useViewportScroll, useTransform } from "framer-motion";

const MidBarAnim = () => {
  const { location } = useContext(MyContext);
  const { scrollYProgress } = useViewportScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);

  const inputRange = [0, 1]
  const barSize = [64, 105]
  const tranformedBarSize = useTransform(scrollYProgress, inputRange, barSize)

  useEffect(() => {
    // console.log(scrollYProgress);
    // console.log(hookedYPostion);
    // hook into the onChange, store the current value as state.
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgress]); //make sure to re-subscriobe when scrollYProgress changes

  const barVariants = {
    hidden: {
      y: "100vh",
    },
    transition: {
      y: "30rem",
    },
    show: {
      y: 0,
      transition: {
        duration: 2,
      },
    },
    showAbout: (custom) => {
      //custom can be removed
      console.log(tranformedBarSize.current)
      console.log(custom);
      return {
        y: 0,
        // width:'2rem',
        // height: "63vh",
        // height: '60%',
        // condition can potentially be removed
        height:
          location.pathname === "/" ? "64vh" : `${tranformedBarSize.current}vh`,
        transition: {
          duration: 2,
        },
      };
    },
    exit: {
      y: "30rem",
      // transition: {
      //   duration: 2,
      // },
    },
  };
  // console.log(location.pathname)
  return (
    <motion.div
      className="title-bar"
      variants={barVariants}
      initial={location.pathname === "/" ? "hidden" : "transition"}
      animate={location.pathname !== "/" ? "showAbout" : "show"}
      exit={location.pathname === "/" ? "hidden" : "transition"}
      custom={hookedYPostion}
    ></motion.div>
  );
};

export default MidBarAnim;
