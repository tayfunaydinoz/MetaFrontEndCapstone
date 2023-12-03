import React from "react";
import Container from "react-bootstrap/Container";
import background from "../assets/restaurant.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Reservationform from "../components/Reservationform";

const Reservation = () => {
  return (
    <Container>
      <Card className="">
        <Card.Img src={background} style={{ filter: "contrast(40%)" }} alt="" />
        <Card.ImgOverlay>
          <Row className="h-100">
            <Col className="align-self-center">
              <Card className=" p-2 ms-5 border-0 bg-transparent">
                <Card.Body className="d-flex flex-column justify-content-evenly">
                  <Card.Title className="reservationCardTitle">
                    LITTLE LEMON
                  </Card.Title>

                  <Card.Text className="reservationCardText">
                    Lorem ipsum dolor sit amet corsectetur adipiscing elit, sed
                    do eiusmoc terrpor incididunl Lt lahone et doore maga
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="align-self-center">
              <Reservationform />
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default Reservation;
