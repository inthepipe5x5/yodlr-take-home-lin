import React, { useEffect, useState } from "react";
import YodlrApi from "../../../lib/api";
import { Navigate, useNavigate, useParams } from "react-router";
import { Button, Form, Label, FormGroup, Input, Spinner } from "reactstrap";

const capitalizeWord = (word) => {
  const firstLetter = word.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);
  const final = firstLetterCap + remainingLetters;
  return final;
};

const deCamelizeWord = (word) => {
  const wordsArray = word.split(/(?=[A-Z])/);
  const capitalizedWordsArray = wordsArray.map(capitalizeWord);
  const result = capitalizedWordsArray.join(" ");
  return result;
};

const EditUserForm = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [inputData, setInputData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    state: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await YodlrApi.getUser(id);
        if (response.statusText === "OK") {
          setUser(response.data);
          setInputData(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setLoading(false);
      }
    };

    if (id) {
      getUserData();
    }
  }, [id]);

  const handleInput = (evt) => {
    const { name, value } = evt.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await YodlrApi.putUser(id, inputData);
      alert("User updated successfully!");
      return navigate(`/users/${id}`);
    } catch (error) {
      console.error("Failed to update user data:", error);
    }
  };

  const generateFields = (defaultValuesObj) => {
    return Object.entries(defaultValuesObj).map(([key, value]) => (
      <FormGroup floating key={`${key}-form-group`}>
        <Label key={`${key}-label`} for={key}>
          {`${deCamelizeWord(key)}`}
        </Label>
        <Input
          key={`${key}-input`}
          id={`${key}-input`}
          type="text"
          name={key}
          placeholder={`Enter ${deCamelizeWord(key)}`}
          value={inputData[key] || ""}
          onChange={handleInput}
        />
      </FormGroup>
    ));
  };

  if (loading) return <Spinner color="light" />;

  return (
    <Form onSubmit={handleSubmit}>
      {generateFields(user || inputData)}
      <Button color="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditUserForm;
