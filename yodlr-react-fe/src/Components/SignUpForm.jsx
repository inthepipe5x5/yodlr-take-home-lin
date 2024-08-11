import React, { useState } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import YodlrApi from "../../../lib/api";

const defaultSignUpState = {
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
        />
      </FormGroup>
      <FormGroup floating>
        <Label for="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
        />
      </FormGroup>
      <FormGroup floating>
        <Label for="LastName">Last Name</Label>
        <Input
          type="text"
          name="LastName"
          id="LastName"
          placeholder="Enter your last name"
        />
      </FormGroup>

      <FormGroup floating>
        <Label for="Password">Password</Label>
        <Input
          type="password"
          name="password"
          id="Password"
          placeholder="Enter your password"
        />
      </FormGroup>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default SignUpForm;
