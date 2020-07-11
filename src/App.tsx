import React from "react";
import logo from "./logo.svg";
import { Typography, Paper, ThemeProvider } from "@material-ui/core";
import "./App.css";
import theme from "./theme";
import Home from "./containers/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
