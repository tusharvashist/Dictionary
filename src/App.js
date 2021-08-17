import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header/Header";
import Meaning from "./Components/Meaning/Meaning";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightTheme, setLightTheme] = useState(false);

  const fetchData = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      console.log(data.data);
      setMeaning(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [word, category]);

  return (
    <div
      style={{
        height: "100vh",
        background: lightTheme ? "#ffffff" : "#282c34",
        color: "white",
      }}
    >
      <Container>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            style={{ color: lightTheme ? "#000" : "#fff" }}
            label={lightTheme ? "Dark" : "Light"}
            checked={lightTheme}
            onChange={() => {
              console.log(lightTheme);
              setLightTheme(!lightTheme);
            }}
          />
        </Form>

        <Row>
          <Col>
            <Header
              word={word}
              setWord={setWord}
              category={category}
              setCategory={setCategory}
              lightTheme={lightTheme}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {meaning && (
              <Meaning
                meaning={meaning}
                word={word}
                category={category}
                lightTheme={lightTheme}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
