import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();


  return (
    <div>
      <Button onClick={() => navigate(-1)} variant="info">
        Go back
      </Button>
    </div>
  );
};

export default BackButton;
