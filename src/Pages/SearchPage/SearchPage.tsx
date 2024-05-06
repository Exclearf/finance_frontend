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

const SearchPage: React.FC<SearchPageProps> = (
  props: SearchPageProps
): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = async (e: SyntheticEvent) => {
    e.preventDefault();

    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
      //@ts-ignore
    } else if (Array.isArray(result?.data.result)) {
      //@ts-ignore
      setSearchResult(result?.data.result);
    }
    console.log(searchResult);
  };

  const handleAddToPortfolio = (e: any, value: string) => {
    e.preventDefault();
    if (!portfolioValues.includes(value)) {
      setPortfolioValues((portfolioValues) => [...portfolioValues, value]);
    }
    // Blur the button
    e.target.blur();
  };

  const handleDeleteFromPortfolio = (e: any,  value: string) => {
    e.preventDefault();
    setPortfolioValues((portfolioValues) =>
      portfolioValues.filter((item) => item !== value)
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
        <CardList searchResults={searchResult.filter(searchResultItem => !searchResultItem.displaySymbol.includes('.'))} />
        {serverError && <h1>Unable to connect to the API</h1>}
      </AddToPortfolioContext.Provider>
      <DeleteFromPortfolioContext.Provider value={handleDeleteFromPortfolio}>
        <PortfolioList portfolioValues={portfolioValues} />
      </DeleteFromPortfolioContext.Provider>
    </SearchPageStyled>
  );
};

export default SearchPage;
