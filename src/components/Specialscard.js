import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Specialscard = (prop) => {
  function handleClick(productName) {
    ////// add productName to orderlist
    //// redirect to basket to buy products
  }

  return (
    <Card
      style={{ width: "25rem" }}
      className="m-2 mb-0 lightBgColor border-bottom-0"
    >
      <Card.Img
        variant="top"
        className="object-fit-cover"
        src={prop.url}
        height={225}
      />
      <Card.Body>
        <div className="d-flex align-items-center my-3">
          <Card.Title className="my-0 cardTitle">{prop.title}</Card.Title>
          <Card.Title className="my-0 ms-auto price">{prop.price}</Card.Title>
        </div>
        <Card.Text className="cardText">{prop.text}</Card.Text>
        <Button
          className="custom-btn"
          onClick={handleClick(prop.button)}
          variant="primary"
        >
          Order a delivery
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Specialscard;
