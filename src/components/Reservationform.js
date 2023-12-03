import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import "yup-phone-lite";
import { parse, isDate } from "date-fns";

const Reservationform = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required(),
    phoneNumber: yup
      .string()
      .phone("TR", "Please enter a valid phone number")
      .required("A phone number is required"),
    occasion: yup
      .string()
      .oneOf(["nothingSpecial", "birthDay", "anniversary", "party"]),
    guests: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        occasion: "Nothing Special",
        guests: 1,
        date: "",
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        setFieldValue,
      }) => (
        <Form
          className="bg-white m-5 p-5 rounded-5"
          noValidate
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="6" className="position-relative">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mark"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" className="position-relative">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Otto"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder={"Mark.Otto@email.com"}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" className="position-relative">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="(+90) 222 000 11 88"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                isInvalid={!!errors.phoneNumber}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" className="mb-3">
              <Form.Label>Occasion</Form.Label>
              <Form.Select
                type="select"
                name="occasion"
                value={values.occasion}
                onChange={handleChange}
                isInvalid={!!errors.occasion}
              >
                <option value="nothingSpecial">Nothing Special</option>
                <option value="birthDay">Birth Day</option>
                <option value="anniversary">Anniversary</option>
                <option value="party">Party</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" className="position-relative">
              <Form.Label>Guests</Form.Label>

              <InputGroup>
                <Form.Control
                  type="number"
                  name="guests"
                  value={values.guests}
                  onChange={handleChange}
                  isInvalid={!!errors.guests}
                />
                <Button
                  variant="warning"
                  onClick={() => {
                    return setFieldValue("guests", 2);
                  }}
                >
                  2
                </Button>
                <Button
                  variant="warning"
                  onClick={() => {
                    return setFieldValue("guests", 4);
                  }}
                >
                  4
                </Button>
                <Button
                  variant="warning"
                  onClick={() => {
                    return setFieldValue("guests", 8);
                  }}
                >
                  8
                </Button>
              </InputGroup>

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" className="position-relative mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                name="date"
                onChange={handleChange}
                isInvalid={!!errors.date}
              />
              <script>
                var today = new Date().toISOString().slice(0, 16);
                document.getElementsByName("date")[0].min = today;
              </script>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.date}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
};

export default Reservationform;
