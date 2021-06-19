import React, { useState, useEffect } from "react";
import CryptoCard from "./components/CryptoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import getPrices from "./helpers/APICallHelper";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      getPrices()
        .then((cryptoData) => setData(cryptoData))
        .then(() => setLoading(false))
        .catch((err) => console.error(err));
    }, 15 * 1000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading && (
        <div
          id="loader"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {!loading && (
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
      )}
    </>
  );
}

export default App;
