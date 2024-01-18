import Button from "react-bootstrap/Button";
import { useTheme } from "../provider";

const DarkModeButton = () => {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <Button
      style={{
        color: colors[theme].color,
        padding: "8px 16px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={toggleTheme}
    >
      DarkModeButton
    </Button>
  );
};

export default DarkModeButton;
