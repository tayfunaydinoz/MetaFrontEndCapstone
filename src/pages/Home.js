import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <Container className="p-0">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer handleAbout={props.handleAbout} />
    </Container>
  );
};

export default Home;
