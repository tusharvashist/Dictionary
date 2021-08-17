import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Meaning.css";

const Meaning = ({ meaning, word, category, lightTheme }) => {
  return (
    <div className="meaning mt-5">
      <Row className="justify-content-md-center">
        <Col>
          {meaning[0] && word && category === "en" && (
            <audio
              src={meaning[0].phonetics[0].audio}
              style={{ width: "100%" }}
              controls
            ></audio>
          )}
          {word === "" ? (
            <p
              style={{ color: lightTheme ? "#000" : "#fff" }}
              className="start-text"
            >
              Start by searching word
            </p>
          ) : (
            meaning.map((mean) =>
              mean.meanings.map((item) =>
                item.definitions.map((def) => (
                  <div
                    className="single-meaning"
                    style={{
                      background: lightTheme ? "#6B7AA1" : "white",
                      color: lightTheme ? "white" : "black",
                    }}
                  >
                    <b>{def.definition}</b>
                    <hr
                      style={{
                        background: "black",
                        height: "1px",
                        width: "100%",
                        margin: "0",
                      }}
                    />
                    {def.example && (
                      <span>
                        <b>Example:</b> {def.example}
                      </span>
                    )}
                    {def.synonyms && (
                      <span>
                        <b>Snonyms:</b> {def.synonyms.map((s) => `${s}, `)}
                      </span>
                    )}
                  </div>
                ))
              )
            )
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Meaning;
