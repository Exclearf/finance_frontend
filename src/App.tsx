import React, { SyntheticEvent, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import { darkTheme } from "./Themes/Themes";
import { ThemeProvider } from "styled-components";
import AppStyled from "./AppStyled";

interface AppProps {}

const App: React.FC<AppProps> = (props: AppProps): JSX.Element => {
  return (
    <AppStyled>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </AppStyled>
  );
};

export default App;
