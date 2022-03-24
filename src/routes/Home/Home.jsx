import React from "react";
import TitleAnim from "../../components/anim/TitleAnim";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-main">
      <TitleAnim titleString={'Welcome'}/>
    </div>
  );
};

export default Home;
