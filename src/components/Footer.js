import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import "../index.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import logoIcon from "../assets/logo.png";

const Footer = () => {
  return (
    <Container className="px-0">
      <div className="d-flex darkBgColor">
        <Image src={logoIcon} className="object-fit-contain ms-3 ps-3" />
        <div className="d-flex flex-grow-1 justify-content-evenly my-4">
          <div>
            <Nav className="flex-column ">
              <Navbar.Brand className="footerCardTitle footerTextColor">
                Doormat Navigation
              </Navbar.Brand>
              <LinkContainer to="/home">
                <Nav.Link className="footerCardText footerTextColor px-0">
                  Home
                </Nav.Link>
              </LinkContainer>

              <Nav.Link
                className="footerCardText footerTextColor px-0"
                onClick={() => {
                  return document.getElementById("about").scrollIntoView();
                }}
              >
                About
              </Nav.Link>

              <Nav.Link
                className="footerCardText footerTextColor px-0"
                onClick={() => {
                  return document.getElementById("menu").scrollIntoView();
                }}
              >
                Menu
              </Nav.Link>

              <LinkContainer to="/reservation">
                <Nav.Link className="footerCardText footerTextColor px-0">
                  Reservations
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="">
                <Nav.Link className="footerCardText footerTextColor px-0">
                  Order Online
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="">
                <Nav.Link className="footerCardText footerTextColor px-0">
                  Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </div>
          <div>
            <Nav className="flex-column">
              <Navbar.Brand className="footerCardTitle footerTextColor">
                Contact
              </Navbar.Brand>
              <div className="mt-2">
                <p className="footerCardText footerTextColor">Adress</p>
                <p className="footerCardText footerTextColor">Phone Number</p>
                <p className="footerCardText footerTextColor">Email</p>
              </div>
            </Nav>
          </div>
          <div>
            <Nav className="flex-column">
              <Navbar.Brand className="footerCardTitle footerTextColor">
                Social Media Links
              </Navbar.Brand>
              <Nav.Link
                className="footerCardText footerTextColor px-0"
                href="https://www.facebook.com"
              >
                Facebook
              </Nav.Link>
              <Nav.Link
                className="footerCardText footerTextColor px-0"
                href="https://www.instagram.com"
              >
                Instagram
              </Nav.Link>
              <Nav.Link
                className="footerCardText footerTextColor px-0"
                href="https://twitter.com"
              >
                Twitter
              </Nav.Link>
              <Nav.Link
                className="footerCardText footerTextColor px-0"
                href="https://www.youtube.com"
              >
                Youtube
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
