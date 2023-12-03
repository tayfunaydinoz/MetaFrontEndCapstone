import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  const [scrollValid, setScrollValid] = useState();
  const location = useLocation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setScrollValid(() => {
      return location.pathname == "/" ? true : false;
    });
  }, [location]);

  return (
    <>
      <Navbar className="lightBgColor">
        <LinkContainer to="/">
          <Navbar.Brand className="ms-5 ps-5">
            <img
              src={logo}
              width="300"
              height="75"
              className="align-top"
              alt="Little Lemon logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="navText justify-content-center flex-grow-1 me-auto">
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link active>HOME</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link
                active={scrollValid}
                disabled={!scrollValid}
                onClick={() => {
                  return document.getElementById("about").scrollIntoView();
                }}
              >
                ABOUT
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={scrollValid}
              disabled={!scrollValid}
              onClick={() => {
                return document.getElementById("menu").scrollIntoView();
              }}
            >
              MENU
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/reservation">
              <Nav.Link active>RESERVATION</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="">
              <Nav.Link active onClick={handleShow}>
                ORDER ONLINE
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="">
              <Nav.Link active onClick={handleShow}>
                LOGIN
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Problem Occured</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Whooops!! This section is currently under maintenance.
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="custom-btn"
            variant="primary"
            onClick={handleClose}
          >
            Roger That!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
