import React from "react";
import CardStyled from "./CardStyled";
import AddToPortfolio from "../Portfolio/AddToPortofolio/AddToPortfolio";
import { Link } from "react-router-dom";

interface CardProps {
  companyName: string;
  displaySymbol: string;
  type: string;
  ticker: string;
}

const Card: React.FC<CardProps> = ({
  companyName,
  displaySymbol,
  type,
  ticker,
}: CardProps): JSX.Element => {
  return (
    <Link
      to={`/company/${ticker}`}
      style={{
        textDecoration: "none",
        margin: "0px 20px 0px 20px",
        zIndex: "1",
      }}
    >
      <CardStyled>
        <img
          src="https://i.pinimg.com/originals/91/99/7a/91997a7904d12c1b2ef84f560a143c5b.jpg"
          alt=""
        />
        <div className="description">
          <div className="companyName">{companyName}</div>
          <div className="displaySymbol">{displaySymbol}</div>
          <div className="type">{type}</div>
        </div>
        <AddToPortfolio ticker={ticker} displayName={companyName} />
      </CardStyled>
    </Link>
  );
};

export default Card;
