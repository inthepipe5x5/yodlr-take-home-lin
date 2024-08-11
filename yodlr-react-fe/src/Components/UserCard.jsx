import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./UserCard.css";
import teamworkImg from "../assets/teamwork.png";
import YodlrApi from "../../../lib/api";

const capitalizeWord = (word) => {
  const firstLetter = word.charAt(0);

  const firstLetterCap = firstLetter.toUpperCase();

  const remainingLetters = word.slice(1);

  const final = firstLetterCap + remainingLetters;
  return final;
};

const UserCard = (user) => {
  const { id, firstName, lastName, email, status = [] } = user;

  const onButtonClick = (evt, apiCallFunction) => {
    evt.preventDefault();
    apiCallFunction();
  };
  return (
    // <section className="vw-100 vh-100" style={{ backgroundColor: "#f4f5f7" }}>
    // <Container className="py-5 vh-100">
    <Row className="justify-content-center align-items-center vh-100 vw-100">
      <Col lg="6" className="mb-4 mb-lg-0">
        <Card className="mb-3" style={{ borderRadius: ".5rem" }}>
          <Row className="g-0">
            <Col
              md="4"
              className="gradient-custom text-center text-white"
              style={{
                borderTopLeftRadius: ".5rem",
                borderBottomLeftRadius: ".5rem",
              }}
            >
              <CardImg
                src={teamworkImg}
                alt="Person icons created by Freepik - Flaticon"
                className="my-5 user-icon"
                style={{ width: "80px" }}
              />
              <CardTitle tag="h5" className="mb-2 px-2">
                {capitalizeWord(firstName)} {capitalizeWord(lastName)}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                {/* {status ? "Admin 🔐" : "User ✔"} */}
                {status === "active" ? "Active ✔" : "Pending ⏳"}
              </CardSubtitle>
              <Button color="warning" tag={Link} to={`/users/${id}/edit`}>
                Edit Profile
              </Button>
            </Col>
            <Col md="8">
              <CardBody className="p-4">
                <CardTitle tag="h5">User Profile</CardTitle>
                <hr className="mt-0 mb-4" />
                <Row className="pt-1">
                  <Col size="6" className="mb-3">
                    <CardTitle tag="h6">Email</CardTitle>
                    <CardText className="text-muted">{email}</CardText>
                  </Col>
                  <Col size="6" className="mb-3">
                    <CardTitle tag="h6">id</CardTitle>
                    <CardText className="text-muted">{id}</CardText>
                  </Col>
                </Row>
                <CardTitle tag="h6">User Actions</CardTitle>
                <hr className="mt-0 mb-4" />
                <ListGroup className="pt-1">
                  <Button
                    color="danger"
                    onClick={onButtonClick(YodlrApi.deleteUser(id))}
                  >
                    Delete this user
                  </Button>
                  <Button color="warning" tag={Link} to={`/users/${id}/edit`}>
                    Edit this user
                  </Button>
                </ListGroup>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
    // </Container>
    // </section>
  );
};

export default UserCard;
