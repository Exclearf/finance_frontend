import React from "react";
import HomePageStyled from "./HomePageStyled";
import Hero from "../../Components/Hero/Hero";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (
  props: HomePageProps
): JSX.Element => {
  return (
    <HomePageStyled>
      <Hero />
    </HomePageStyled>
  );
};

export default HomePage;
