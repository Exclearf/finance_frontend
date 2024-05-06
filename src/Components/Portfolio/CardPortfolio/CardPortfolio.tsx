import React from "react";
import DeleteFromPortfolio from "../DeleteFromPortfolio/DeleteFromPortfolio";
import CardPortfolioStyled from "./CardPortfolioStyled";
import { Link } from "react-router-dom";

interface CardPortfolioProps {
  portfolioValue: string;
}

const CardPortfolio: React.FC<CardPortfolioProps> = ({
  portfolioValue,
}: CardPortfolioProps): JSX.Element => {
  return (
    <Link to={`/company/${portfolioValue}`} style={{ textDecoration: "none" }}>
      <CardPortfolioStyled>
        <h4>{portfolioValue}</h4>
        <DeleteFromPortfolio portfolioValue={portfolioValue} />
      </CardPortfolioStyled>
    </Link>
  );
};

export default CardPortfolio;
