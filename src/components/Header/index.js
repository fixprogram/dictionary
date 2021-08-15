import React from "react";

import { createTheme, TextField, ThemeProvider } from "@material-ui/core";

import "./Header.css";

const Header = ({ word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#ffffff",
      },
      type: lightMode ? "light" : "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
