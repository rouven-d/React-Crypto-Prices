import React from "react";
import Card from "react-bootstrap/Card";

export default function CryptoCard(props) {
  return (
    <>
      <Card
        bg="dark"
        text="light"
        style={{ width: "18rem", textAlign: "center", margin: "1rem" }}
      >
        <Card.Img variant="top" src={`./images/${props.name}.png`} />
        <Card.Body>
          <Card.Title>{props.price}</Card.Title>
          <Card.Text>{props.name}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
