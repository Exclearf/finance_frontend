import React from "react";
import HeroStyled from "./HeroStyled";
import heroLogo from "../../Resources/Images/heroLogo.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <HeroStyled>
      <div className="heroHeaderWrapper">
        <div className="heroHeader">
          Your single destination for searching stock information, analyzing
          detailed data, and effortlessly managing your portfolio.
        </div>
        <Link to="/Search" className="heroButton">Try now!</Link>
      </div>
      <div className="heroImage">
        <img src={heroLogo} alt="Devices with stock app on them"></img>
      </div>
    </HeroStyled>
  );
};

export default Hero;
