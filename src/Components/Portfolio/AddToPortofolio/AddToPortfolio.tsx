import React, { SyntheticEvent, useContext } from "react";
import { AddToPortfolioContext } from "../../../Contexts/AddToPortfolioContext";
import AddToPortfolioStyled from "./AddToPortfolioStyled";

interface AddToPortfolioProps {
  symbol: string;
}

const AddToPortfolio: React.FC<AddToPortfolioProps> = ({
  symbol,
}: AddToPortfolioProps): JSX.Element => {
  const onAddToPortfolio = useContext(AddToPortfolioContext);
  return (
    <AddToPortfolioStyled>
      <button onClick={(e: SyntheticEvent) => onAddToPortfolio(e, symbol)}>
        Add
      </button>
    </AddToPortfolioStyled>
  );
};

export default AddToPortfolio;
