import React, { useEffect, useState, useCallback } from "react";

import { Container, withStyles, Switch } from "@material-ui/core";

import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Definitions from "./Components/Definitions/Definitions";
import { grey } from "@material-ui/core/colors";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");

  const [lightMode, setLightMode] = useState(false);

  const LightMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = useCallback(async () => {
      try {
        const data = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setMeanings(data.data);
      } catch (error) {
        console.log(error);
      }
    },
    [word],
  )

  useEffect(() => {
    if (word.length > 0) dictionaryApi();
  }, [word.length, dictionaryApi]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "#fff" : "#282c34",
        color: lightMode ? "#000" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        max-width="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div className="switcher">
          <span>{!lightMode ? "Light" : "Dark"} Mode</span>
          <LightMode
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>
        <Header word={word} setWord={setWord} lightMode={lightMode} />

        {meanings && (
          <Definitions word={word} meanings={meanings} lightMode={lightMode} />
        )}
      </Container>
    </div>
  );
}

export default App;
