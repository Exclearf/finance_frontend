import React from "react";
import PortfolioListStyled from "./PortfolioListStyled";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface PortfolioListProps {
  portfolioValues: string[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({
  portfolioValues,
}: PortfolioListProps): JSX.Element => {
  return (
    <PortfolioListStyled>
      <h3>My Portfolio</h3>
      <div className="portfolioItems">
        {portfolioValues &&
          portfolioValues.map((portfolioValue, index) => (
            <CardPortfolio portfolioValue={portfolioValue} key={index} />
          ))}
      </div>
    </PortfolioListStyled>
  );
};

export default PortfolioList;
