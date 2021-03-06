import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar bg="secondary">
        <Navbar.Brand
          style={{
            fontSize: "3rem",
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Crypto Ticker
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
