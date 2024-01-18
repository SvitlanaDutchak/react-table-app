import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Accounts from "./components/Accounts";
import Profiles from "./components/Profiles";
import Campaigns from "./components/Campaigns";
import BackButton from "./components/BackButton";

function App() {
  return (
    <Container className="mt-4">
      <h1>Vite + React</h1>
      <BackButton />
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/profiles/:accountId" element={<Profiles />} />
        <Route path="/profiles/:accountId/campaigns/:profileId" element={<Campaigns />} />
      </Routes>
    </Container>
  );
}

export default App;
