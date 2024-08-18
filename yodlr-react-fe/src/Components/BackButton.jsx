import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Button color="dark" onClick={handleBackClick}>
            <Icon
        iconName="ArrowLeft"
        color="white"
        size="24"
        className="align-top"
      />
    </Button>
  );
};
export default BackButton;
