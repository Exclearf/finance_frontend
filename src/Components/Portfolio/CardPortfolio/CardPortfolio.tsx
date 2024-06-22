import React from "react";
import DeleteFromPortfolio from "../DeleteFromPortfolio/DeleteFromPortfolio";
import CardPortfolioStyled from "./CardPortfolioStyled";
import { Link } from "react-router-dom";
import { AddToPortfolioProps } from "../AddToPortofolio/AddToPortfolio";

interface CardPortfolioProps {
  portfolioEntry: AddToPortfolioProps;
}

const CardPortfolio: React.FC<CardPortfolioProps> = ({
  portfolioEntry,
}: CardPortfolioProps): JSX.Element => {
  return (
    <Link
      to={`/company/${portfolioEntry.ticker}`}
      style={{ textDecoration: "none" }}
      state={{ ticker: portfolioEntry.ticker }}
    >
      <CardPortfolioStyled>
        <h4>{portfolioEntry.displayName}</h4>
        <DeleteFromPortfolio ticker={portfolioEntry.ticker} />
      </CardPortfolioStyled>
    </Link>
  );
};

export default CardPortfolio;
