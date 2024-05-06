import React, { SyntheticEvent, useContext } from "react";
import { DeleteFromPortfolioContext } from "../../../Contexts/DeleteFromPortfolioContext";
import DeleteFromPortfolioStyled from "./DeleteFromPortfolioStyled";

interface DeleteFromPortfolioProps {
  portfolioValue: string;
}

const DeleteFromPortfolio: React.FC<DeleteFromPortfolioProps> = ({
  portfolioValue,
}: DeleteFromPortfolioProps): JSX.Element => {
  const onPortfolioEntryDelete = useContext(DeleteFromPortfolioContext);
  console.log(onPortfolioEntryDelete);
  return (
    <DeleteFromPortfolioStyled>
      <button
        onClick={(e: SyntheticEvent) =>
          onPortfolioEntryDelete(e, portfolioValue)
        }
      />
    </DeleteFromPortfolioStyled>
  );
};

export default DeleteFromPortfolio;
