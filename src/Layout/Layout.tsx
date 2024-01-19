import { ReactNode } from "react";
import { useTheme } from "../provider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DarkModeButton from "../components/DarkModeButton";
import Col from "react-bootstrap/Col";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme, colors } = useTheme();
  const currentColors = colors[theme];
  return (
    <div
      style={{
        background: currentColors?.backgroundColor,
        color: currentColors?.textColor,
        height: "100vh",
      }}
    >
      <Container className="pt-4">
        <Row className="align-items-center justify-content-center">
          <Col md="auto">
            <h1>React Table Data</h1>
          </Col>
          <Col md="auto">
            <DarkModeButton />
          </Col>
        </Row>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
