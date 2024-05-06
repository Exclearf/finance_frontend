import React from "react";
import CardStyled from "./CardStyled";
import AddToPortfolio from "../Portfolio/AddToPortofolio/AddToPortfolio";
import { Link } from "react-router-dom";

interface CardProps {
  companyName: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

const Card: React.FC<CardProps> = ({
  companyName,
  displaySymbol,
  symbol,
  type,
}: CardProps): JSX.Element => {
  return (
    <Link to={`/company/${symbol}`} style={{ textDecoration: 'none', margin: "0px 20px 0px 20px", zIndex: '1' }}>
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
        <AddToPortfolio symbol={symbol}/>
      </CardStyled>
    </Link>
  );
};

export default Card;
