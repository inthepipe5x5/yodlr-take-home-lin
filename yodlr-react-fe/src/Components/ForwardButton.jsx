import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

const ForwardButton = () => {
  const navigate = useNavigate();

  const handleForward = () => {
    navigate(1); // Navigate forward
  };

  return (
    <Button className="width-100" color="dark" onClick={handleForward}>
      <Icon
        iconName="ArrowRight"
        color="white"
        size="24"
        className="align-top"
      />
    </Button>
  );
};

export default ForwardButton;
