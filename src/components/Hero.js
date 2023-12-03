import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import restaurantFood from "../assets/restauranfood.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "../index.css";

const Hero = () => {
  function handleClick() {
    return <Link></Link>;
  }

  return (
    <Container style={{ backgroundColor: "#495E57" }}>
      <Row className="py-4">
        <Col className="col-6">
          <div className="p-2 ms-5 h-100 ">
            <Card className=" p-2 ms-5 h-100 border-0 bg-transparent">
              <Card.Body className="d-flex flex-column justify-content-evenly">
                <Card.Title className="heroTitle">LITTLE LEMON</Card.Title>
                <Card.Subtitle className="heroSubTitle">Chicago</Card.Subtitle>
                <br></br>
                <Card.Text className="text lightColor">
                  Lorem ipsum dolor sit amet corsectetur adipiscing elit, sed do
                  eiusmoc terrpor incididunl Lt lahone et doore maga aliqua.
                </Card.Text>
                <div>
                  <Button
                    className="custom-btn"
                    component={Link}
                    to="/reservation"
                    variant="primary"
                  >
                    Reserve a Table
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className="col-6">
          <div className="d-flex justify-content-center m-2">
            <Image
              src={restaurantFood}
              className="object-fit-cover border rounded"
              width={550}
              height={450}
              rounded
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
