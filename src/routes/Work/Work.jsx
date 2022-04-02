import React from "react";
import "./Work.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import Tilt from "react-parallax-tilt";

const Work = () => {
  return (
    <>
      <TitleAnim titleString={"My Work"} className="work-title" />
      <div className="gallery">
        <Tilt
          className="tilt-container"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          glareBorderRadius='0.5rem'
          scale={1.02}
        >
          <img
            src="https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png"
            alt=""
          />
          <div className="layer-3d">
            <h1>Lorem ipsum</h1>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Work;
