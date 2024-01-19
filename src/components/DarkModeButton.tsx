import Button from "react-bootstrap/Button";
import { useTheme } from "../provider";
import { MdNightlight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkModeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      style={{
        padding: "12px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      variant={theme === "dark" ? "light" : "dark"}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <MdLightMode /> : <MdNightlight />}
    </Button>
  );
};

export default DarkModeButton;
