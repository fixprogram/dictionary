import React from "react";

import "./Definitions.css";

const Definitions = ({ word, meanings, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser doesn't support audio
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def, idx) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: lightMode ? "#282c34" : "#fff",
                  color: lightMode ? "#fff" : "#000",
                }}
                key={idx}
              >
                <b>{def.definition}</b>
                <hr />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
