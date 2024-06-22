import React, { SyntheticEvent, useContext } from "react";
import { DeleteFromPortfolioContext } from "../../../Contexts/DeleteFromPortfolioContext";
import DeleteFromPortfolioStyled from "./DeleteFromPortfolioStyled";

interface DeleteFromPortfolioProps {
  ticker: string;
}

const DeleteFromPortfolio: React.FC<DeleteFromPortfolioProps> = ({
  ticker,
}: DeleteFromPortfolioProps): JSX.Element => {
  const onPortfolioEntryDelete = useContext(DeleteFromPortfolioContext);
  console.log(onPortfolioEntryDelete);
  return (
    <DeleteFromPortfolioStyled>
      <button
        onClick={(e: SyntheticEvent) =>
          onPortfolioEntryDelete(e, ticker)
        }
      />
    </DeleteFromPortfolioStyled>
  );
};

export default DeleteFromPortfolio;
