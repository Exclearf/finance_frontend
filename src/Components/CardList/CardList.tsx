import React from "react";
import CardListStyled from "./CardListStyled";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";

interface CardListProps {
  searchResults: CompanySearch[];
}

const CardList: React.FC<CardListProps> = ({
  searchResults,
}: CardListProps): JSX.Element => {
  return (
    <CardListStyled>
      {searchResults.map((result, index) => (
        <Card
          key={index}
          companyName={result.name}
          displaySymbol={result.ticker}
          type={result.type}
          //@ts-ignore
          ticker={result.ticker}
        />
      ))}
    </CardListStyled>
  );
};

export default CardList;
