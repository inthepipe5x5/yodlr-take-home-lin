import React, { useState } from "react";
import { Form, FormGroup, Label, Button, Input, Row, Col } from "reactstrap";
import YodlrApi from "../../../lib/api";
import { Navigate, useNavigate } from "react-router";

const defaultSignUpState = {
  id: "",
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  state: "pending",
};

const SignUpForm = () => {
  const [inputData, setInputData] = useState(defaultSignUpState);
  const [switchState, setSwitchState] = useState(false);
  const navigate = useNavigate()
  const handleInput = (evt) => {
    const { name, value } = evt.target;
    
    setInputData((prevState) => {
      // Create a copy of the previous state
      const newState = { ...prevState };
  
      // Check the condition for the "id" field
      if (name === "id") {
        // Update the state only if the value is numeric
        if (!isNaN(value)) {
          newState[name] = value;
        }
      } else {
        // Update the state with the new value for other fields
        newState[name] = value;
      }
  
      return newState;
    });
  };
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    YodlrApi.registerNewUser(inputData);
    navigate('/admin')
  };

  return (
    <Form>
      <FormGroup floating>
        <Label for="id">id</Label>
        <Input
          type="id"
          name="id"
          id="id"
          placeholder="Enter User id"
          value={inputData.id}
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup floating>
        <Label for="Email">Email</Label>
        <Input
          type="email"
          name="email"
          id="Email"
          placeholder="Enter User email"
          value={inputData.email}
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup floating>
        <Label for="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter User first name"
          value={inputData.firstName}
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup floating>
        <Label for="LastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="LastName"
          placeholder="Enter User last name"
          value={inputData.lastName}
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup switch>
        <Input
          type="switch"
          checked={switchState}
          onChange={() => {
            setSwitchState(!switchState);
            setInputData((prevState) => ({
              state: switchState ? "active" : "pending",
              ...prevState,
            }));
          }}
        />
        <Label check>Activate User?</Label>
      </FormGroup>

      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default SignUpForm;
