import React from "react";
import Container from "react-bootstrap/Container";
import Reviewcard from "./Reviewcard";

const Testimonials = () => {
  return (
    <Container className="px-0 py-4 lightBgColor">
      <h3 className="text-center testimonial-title">Testimonials</h3>
      <br></br>
      <div className="d-flex m-2 p-2">
        <Reviewcard />
        <Reviewcard />
        <Reviewcard />
        <Reviewcard />
      </div>
    </Container>
  );
};

export default Testimonials;
