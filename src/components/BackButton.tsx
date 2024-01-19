import React from "react";
import Button from "react-bootstrap/Button";
import { useTheme } from "../provider";
import { useNavigate } from "react-router-dom";
import { IoCaretBack } from "react-icons/io5";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  return (
    <div>
      <Button
        onClick={() => navigate(-1)}
        variant={theme === "dark" ? "light" : "dark"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <IoCaretBack /> Go back
      </Button>
    </div>
  );
};

export default BackButton;
