import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Specialscard from "./Specialscard";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDesert from "../assets/lemon dessert.jpg";
import CardGroup from "react-bootstrap/CardGroup";

const loremText =
  "Lorem ipsum dolor sit amet corsecteturv all adipiscing elit, sed do eiusmoc terrpor incididunl Lt lahone et doore maga aliqua.Lorem ipsum dolor sit amet all. ";
const Highlights = () => {
  return (
    <Container
      id="menu"
      className="px-0 py-0 primaryBgColor border border-bottom-0 border-top-1 border-black"
    >
      <div className="d-flex justify-content-between py-4 mx-2">
        <h2 className="highlightsTitle">Specials</h2>
        <Button className="custom-btn">Online Menu</Button>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        <Specialscard
          title="Greek Salad"
          text={loremText}
          url={greekSalad}
          price="$5.99"
          button="greekSaladButton"
        />
        <Specialscard
          title="Bruchetta"
          text={loremText}
          url={bruchetta}
          price="$5.99"
          button="bruchettaButton"
        />
        <Specialscard
          title="Lemon Desert"
          text={loremText}
          url={lemonDesert}
          price="$5.99"
          button="lemonDesertButton"
        />
      </div>
    </Container>
  );
};

export default Highlights;
