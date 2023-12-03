import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import marioandAdrianA from "../assets/Mario and Adrian A.jpg";
import marioandAdrianB from "../assets/Mario and Adrian b.jpg";

const About = () => {
  return (
    <Container id="about" className="px-0 primaryBgColor">
      <Row className="mx-0 px-0">
        <Col className="col-5 d-flex align-items-center">
          <div className="p-2 h-100">
            <Card className=" p-2 h-75 border-0 bg-transparent">
              <Card.Body className="m-2 d-flex flex-column justify-content-evenly">
                <Card.Title className="aboutTitle">LITTLE LEMON</Card.Title>
                <Card.Subtitle className="aboutSubTitle">Chicago</Card.Subtitle>
                <br></br>
                <Card.Text className="aboutText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  eget accumsan felis. Sed vulputate dui eget odio venenatis, eu
                  fringilla nulla aliquet. Donec lacus augue, faucibus eget
                  pellentesque consequat, feugiat eu massa. Nunc fermentum
                  condimentum rutrum. Curabitur porttitor neque ut risus ornare
                  scelerisque. Quisque id tortor condimentum, semper sem in.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className="col-7 d-flex justify-content-center">
          <div className="">
            <div className="p-5 position-relative">
              <Image
                width={500}
                height={350}
                className="object-fit-contain m-5"
                src={marioandAdrianB}
              />
              <Image
                className="object-fit-contain position-absolute top-0 end-0 p-4"
                width={350}
                src={marioandAdrianA}
              />
            </div>
          </div>
        </Col>
      </Row>
      <div></div>
    </Container>
  );
};

export default About;
