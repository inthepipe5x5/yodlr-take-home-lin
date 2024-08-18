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
  Spinner,
} from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import teamworkImg from "../assets/teamwork.png";
import YodlrApi from "../../../lib/api";
import "./UserCard.css";

const UserCard = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  let userId = id;
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    id: userId || "",
  });
  const { firstName, lastName, email, state } = userDetails;
  const navigate = useNavigate();

  useEffect(() => {
    const getAllData = async () => {
      try {
        const resp = await YodlrApi.getUser(id);
        const userData = resp.data;
        console.debug(userData);
        if (resp.status !== 200) {
          navigate("/NotFound");
        } else {
          setUserDetails(userData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAllData();
  }, [id]);

  const toggleUserState = async () => {
    try {
      const newState = state === "pending" ? "active" : "pending";
      userDetails["state"] = newState;
      const response = await YodlrApi.putUser(id, userDetails);
      const newUserDetails = response.data;
      setUserDetails(newUserDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const onButtonClick = (evt, apiCallFunction) => {
    evt.preventDefault();
    apiCallFunction();
  };

  return (
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
                {!loading && firstName && lastName ? (
                  `${firstName} ${lastName}`
                ) : (
                  <Spinner color="light" />
                )}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                {state === "active" ? "Active ✔" : "Pending ⏳"} User
              </CardSubtitle>

              {state && state === "active" ? (
                <Button color="warning" onClick={toggleUserState}>
                  Deactivate User
                </Button>
              ) : (
                <Button color="success" onClick={toggleUserState}>
                  Activate User
                </Button>
              )}
            </Col>
            <Col md="8">
              <CardBody className="p-4">
                <CardTitle tag="h5">User Profile</CardTitle>
                <hr className="mt-0 mb-4" />
                <Row className="pt-1">
                  <Col size="6" className="mb-3">
                    <CardTitle tag="h6">Email</CardTitle>
                    <CardText tag={"span"} className="text-muted">
                      {!loading && email ? (
                        <p>{email}</p>
                      ) : (
                        <Spinner color="light" />
                      )}
                    </CardText>
                  </Col>
                  <Col size="6" className="mb-3">
                    <CardTitle tag="h6">id</CardTitle>
                    <CardText tag={"span"} className="text-muted">
                      {!loading && id ? <p>{id}</p> : <Spinner color="light" />}
                    </CardText>
                  </Col>
                </Row>
                <CardTitle tag="h6">User Actions</CardTitle>
                <hr className="mt-0 mb-4" />
                <ListGroup className="pt-1">
                  <Button
                    color="danger"
                    onClick={(evt) =>
                      onButtonClick(evt, async () => {
                        await YodlrApi.deleteUser(id);
                        navigate("/admin");
                      })
                    }
                  >
                    Delete User
                  </Button>
                  <Button color="info" tag={Link} to={`/users/${id}/edit`}>
                    Edit User
                  </Button>
                </ListGroup>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default UserCard;
