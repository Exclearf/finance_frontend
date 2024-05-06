import React, { SyntheticEvent } from "react";
import SearchStyled from "./SearchStyled";

interface SearchProps {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  onSearchClick: (e: SyntheticEvent) => Promise<void>;
}

const Search: React.FC<SearchProps> = ({
  handleSearchChange,
  searchValue,
  onSearchClick,
}: SearchProps): JSX.Element => {
  return (
    <SearchStyled>
      <div className="searchWrapper">
        <form onSubmit={onSearchClick}>
          <input value={searchValue} onChange={(e) => handleSearchChange(e)} placeholder="Search for a stock..."/>
          <button type="submit">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(90)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#ebeaea"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </form>
      </div>
    </SearchStyled>
  );
};

export default Search;
