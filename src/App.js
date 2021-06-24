import React, { useState, useEffect } from "react";
import CryptoCard from "./components/CryptoCard";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import getPrices from "./helpers/APICallHelper";
import "../src/index.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      getPrices()
        .then((cryptoData) => setData(cryptoData))
        .then(() => setLoading(false))
        .catch((err) => console.error(err));
    }, 10 * 1000);
    // return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      {loading && (
        <>
          <Header />
          <div
            id="loader"
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "5rem",
              marginBottom: "5rem",
            }}
          />
          <div
            style={{
              marginBottom: "0",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <p
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              © Rouven Daunke {currentYear}
            </p>
          </div>
        </>
      )}

      {!loading && (
        <>
          <Header />
          <Container
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "5rem",
              marginBottom: "5rem",
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
          <div
            style={{
              marginBottom: "0",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <p
              style={{
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              © Rouven Daunke {currentYear}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default App;
