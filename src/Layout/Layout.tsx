import { useTheme } from "../provider";
import Container from "react-bootstrap/Container";
import DarkModeButton from "../components/DarkModeButton";

const Layout = ({ children }) => {
  const { theme, colors } = useTheme();

  return (
    <div
      style={{
        background: colors[theme].backgroundColor,
        color: colors[theme].textColor,
        height: "100vh"
      }}
    >
      <Container className="mt-4">
        <h1>Vite + React</h1>
        <DarkModeButton />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
