import React, { useState } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import YodlrApi from "../../../lib/api";

const defaultLoginFormState = { username: "", password: "" };

const LoginForm = (defaultFormData = defaultLoginFormState) => {
  const [inputData, setInputData] = useState(defaultFormData);

  const handleInput = (evt) => {
    const { name, value } = evt.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    YodlrApi.authenticate(inputData);
  };

  return (
    <Form>
      <FormGroup floating>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
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

export default LoginForm;
