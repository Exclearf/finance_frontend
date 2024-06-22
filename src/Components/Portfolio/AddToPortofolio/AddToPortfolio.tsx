import React, { SyntheticEvent, useContext } from "react";
import { AddToPortfolioContext } from "../../../Contexts/AddToPortfolioContext";
import AddToPortfolioStyled from "./AddToPortfolioStyled";

export type AddToPortfolioProps = {
  ticker: string;
  displayName: string;
}

const AddToPortfolio: React.FC<AddToPortfolioProps> = ({
  ticker,
  displayName
}: AddToPortfolioProps): JSX.Element => {
  const onAddToPortfolio = useContext(AddToPortfolioContext);
  return (
    <AddToPortfolioStyled>
      <button onClick={(e: SyntheticEvent) => onAddToPortfolio(e, ticker, displayName)}>
        Add
      </button>
    </AddToPortfolioStyled>
  );
};

export default AddToPortfolio;
