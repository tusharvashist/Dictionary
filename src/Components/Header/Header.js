import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import "./Header.css";
import categories from "../Data/Category";

const Header = ({ word, setWord, setCategory, category, lightTheme }) => {
  const handleChange = (launguage) => {
    setCategory(launguage);
    setWord("");
  };
  return (
    <div className="header">
      <Row className="justify-content-md-center">
        <Col>
          <h1
            className="word"
            style={{ color: lightTheme ? "#000000" : "#ffffff" }}
          >
            {word ? word : "Dictionary"}
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col md lg="4">
          <FloatingLabel
            controlId="floatingInputGrid"
            style={{ color: lightTheme ? "#000" : "#fff" }}
            label="Search Word"
          >
            <Form.Control
              style={{
                background: "transparent",
                color: lightTheme ? "#000" : "#fff",
              }}
              type="text"
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col md lg="4">
          <FloatingLabel
            style={{ color: lightTheme ? "#000" : "#fff" }}
            controlId="floatingSelectGrid"
            label="Select your launguage"
          >
            <Form.Select
              style={{
                background: "transparent",
                color: lightTheme ? "black" : "white",
              }}
              aria-label="Select your launguage"
              className="options"
              value={category}
              onChange={(e) => handleChange(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.label} value={category.label}>
                  {category.value}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
