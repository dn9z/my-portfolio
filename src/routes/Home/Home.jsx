import {useEffect} from "react";
import SubTitleAnim from "../../components/anim/SubTitleAnim/SubTitleAnim";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import "./Home.scss";
const Home = () => {
  useEffect(() => {

  },[])
  return (
    <div className="home-main">
      
      <TitleAnim
        titleString="Hello There!"
        className="home-title"
      />
      {/* <SubTitleAnim subTitleString="My name is Deniz Ilyasoglu, I'm a creative front-end designer, backend developer and sports enthusiast"/> */}
      <SubTitleAnim subTitleString="Deniz Ilyasoglu"/>
      <SubTitleAnim subTitleString="Creative front-end designer, backend developer, sports enthusiast"/>
      </div>
    
  );
};

export default Home;
