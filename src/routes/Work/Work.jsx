import React from "react";
import "./Work.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const workArray = [
  {
    name: "Lorem ipsum",
    pictureLink:
      "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Lorem ipsum2",
    pictureLink:
      "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Lorem ipsum3",
    pictureLink:
      "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
];

const Work = () => {
  const galleryVariants = {
    hidden: {
      // opacity:0,
      transform: "matrix3d(1,0,0.00,0,0.00,0.02,1.00,-0.002,0,-1,0.02,0,0,0,0,1)",
      // y: 0,
    },
    show: (i) => {
      return {
        // opacity:[0,1,1,1],
        transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
        // y: i === 0 ? "15rem" : i === 1 ? "10rem" : i === 2 && 0,
      };
    },
  };

  return (
    <div className="component-container">
      <TitleAnim titleString={"My Work"} className="work-title" />
      <motion.div
        className="gallery"
        initial="hidden"
        animate="show"
        transition={{ delayChildren: 6.6, staggerChildren: 0.5 }}
      >
        {workArray.map((ele, i) => {
          return (
            <motion.div
              key={i}
              className="card-container"
              variants={galleryVariants}
              custom={i}
            >
              <Tilt
                className="tilt-container"
                // perspective={500}
                // glareEnable={true}
                // glareMaxOpacity={0.45}
                // glareBorderRadius="0.5rem"
                // scale={1.02}
              >
                <img src={ele.pictureLink} alt="" />
                <div className="layer-3d">
                  <h1>{ele.name}</h1>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
