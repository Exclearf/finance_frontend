import React from "react";
import NavbarStyled from "./NavbarStyled";
import { Link, useLocation, useParams } from "react-router-dom";
//@ts-ignore
import { Helmet } from "react-helmet";

const possiblePaths: any = {
  Search: "Search",
  "": "Home Page",
  company: "Company",
  'design-guide': "Design Page"
};

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): JSX.Element => {
  const currentLocation = possiblePaths[useLocation().pathname.split("/")[1]];
  console.log(currentLocation);
  const { symbol } = useParams();
  console.log(symbol);
  return (
    <NavbarStyled>
      <Helmet>
        <title style={{ textTransform: "capitalize" }}>
          Stocks | {currentLocation}
        </title>
      </Helmet>
      <Link
        to="/"
        className="location"
        style={{ textDecoration: "none", textTransform: "capitalize" }}
      >
        {currentLocation}{symbol && " | " + symbol.trim()}
      </Link>
      <div className="accountSection">
        <a href="#" className="accountSectionButton">
          Log In
        </a>
        <a href="#" className="accountSectionButton signUp">
          Sign Up
        </a>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
