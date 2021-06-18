import React, { useState, useEffect } from "react";
import CryptoCard from "./components/CryptoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import getPrices from "./helpers/APICallHelper";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPrices()
      .then((cryptoData) => setData(cryptoData))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Container
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Row>
          {data.map((cryptoItem, index) => {
            return (
              <CryptoCard
                key={index}
                name={cryptoItem.name}
                price={cryptoItem.price}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;
