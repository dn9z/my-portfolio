import React from "react";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-main">
      <TitleAnim titleString={'Welcome'} className='home-title'/>
      <p>Deniz Ilyasoglu</p>
      <p>creative front-end designer, backend developer, sports enthusiast</p>
    </div>
  );
};

export default Home;
