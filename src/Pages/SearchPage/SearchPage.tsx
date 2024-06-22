import React, { SyntheticEvent, useState } from "react";
import { searchCompanies } from "../../api";
import SearchPageStyled from "./SearchPageStyled";
import PortfolioList from "../../Components/Portfolio/PortfolioList/PortfolioList";
import { DeleteFromPortfolioContext } from "../../Contexts/DeleteFromPortfolioContext";
import { AddToPortfolioContext } from "../../Contexts/AddToPortfolioContext";
import Search from "../../Components/Search/Search";
import CardList from "../../Components/CardList/CardList";
import { CompanySearch } from "../../company";
interface SearchPageProps {}

type portfolioEntries = {
  ticker: string;
  displayName: string;
};

const SearchPage: React.FC<SearchPageProps> = (
  props: SearchPageProps
): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<portfolioEntries[]>(
    []
  );
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = async (e: SyntheticEvent) => {
    e.preventDefault();

    const result = await searchCompanies(search);

    //! ToDo: refactor
    if (typeof result === "string") {
      setServerError(result);
      //@ts-ignore
    } else if (Array.isArray(result?.data.results)) {
      //@ts-ignore
      setSearchResult(result?.data.results);
      setServerError(
        //@ts-ignore
        result?.data.results.length ? "" : "We did not find such stock..."
      );
    }
    console.log(searchResult);
  };

  const checkIfAlreadyInPortfolio = (portfolioEntry: portfolioEntries) => {
    for (const entry of portfolioValues) {
      if (entry.ticker === portfolioEntry.ticker) {
        return true;
      }
    }
    return false;
  };

  const handleAddToPortfolio = (
    e: any,
    ticker: string,
    displayName: string
  ) => {
    e.preventDefault();
    const portfolioEntry: portfolioEntries = {
      ticker: ticker,
      displayName: displayName,
    };
    if (!checkIfAlreadyInPortfolio(portfolioEntry)) {
      setPortfolioValues((portfolioValues) => [
        ...portfolioValues,
        portfolioEntry,
      ]);
    }
    // Blur the button
    e.target.blur();
  };

  const handleDeleteFromPortfolio = (e: any, ticker: string) => {
    e.preventDefault();
    setPortfolioValues((portfolioValues) =>
      portfolioValues.filter((item) => item.ticker !== ticker)
    );

    // Blur the button
    e.target.blur();
  };
  return (
    <SearchPageStyled>
      <Search
        searchValue={search}
        handleSearchChange={handleSearchChange}
        onSearchClick={handleSearchClick}
      />
      <AddToPortfolioContext.Provider value={handleAddToPortfolio}>
        {serverError ? (
          <h2 className="errorWrapper">{serverError}</h2>
        ) : (
          <CardList searchResults={searchResult} />
        )}
      </AddToPortfolioContext.Provider>
      <DeleteFromPortfolioContext.Provider value={handleDeleteFromPortfolio}>
        <PortfolioList portfolioValues={portfolioValues} />
      </DeleteFromPortfolioContext.Provider>
    </SearchPageStyled>
  );
};

export default SearchPage;
