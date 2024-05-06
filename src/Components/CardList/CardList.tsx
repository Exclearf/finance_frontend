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
      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <Card
            key={index}
            companyName={result.description}
            displaySymbol={result.displaySymbol}
            type={result.type}
            symbol={result.symbol}
          />
        ))
      ) : (
        <div className="noSearchResultWrapper">
          <h1>No results...</h1>
        </div>
      )}
    </CardListStyled>
  );
};

export default CardList;
