import React, { useState } from "react";
import { Form, FormGroup, Label, Button, Input, Row, Col } from "reactstrap";
import YodlrApi from "../../../lib/api";

const defaultSignUpState = {
  email: "",
  firstName: "",
  lastName: "",
  username: "",
};

const SignUpForm = () => {
  const [inputData, setInputData] = useState(defaultSignUpState);

  const handleInput = (evt) => {
    const { name, value } = evt.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    YodlrApi.registerNewUser(inputData);
  };

  return (
    <Form>
      <FormGroup floating>
        <Label for="Email">Email</Label>
        <Input
          type="email"
          name="email"
          id="Email"
          placeholder="Enter your email"
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
          placeholder="Enter your first name"
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
          placeholder="Enter your last name"
        value={inputData.lastName}
        onChange={handleInput}
        />
      </FormGroup>

      <FormGroup floating>
        <Label for="Password">Password</Label>
        <Input
          type="password"
          name="password"
          id="Password"
          placeholder="Enter your password"
          value={inputData.password}
          onChange={handleInput}
        />
      </FormGroup>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default SignUpForm;
