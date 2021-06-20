import React from "react";
import Card from "react-bootstrap/Card";
import "../index.css";

export default function CryptoCard(props) {
  const filePath = `images/${props.name}.svg`;

  return (
    <>
      <Card
        bg="secondary"
        text="light"
        style={{
          width: "18rem",
          textAlign: "center",
          margin: "1rem",
          borderRadius: "15px",
        }}
      >
        <Card.Img
          variant="top"
          src={filePath}
          style={{
            width: "6rem",
            height: "6rem",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        />
        <Card.Body>
          <Card.Title>{props.price}</Card.Title>
          <Card.Text>{props.name}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
