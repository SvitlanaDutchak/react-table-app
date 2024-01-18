import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./provider";

import Accounts from "./components/Accounts";
import Profiles from "./components/Profiles";
import Campaigns from "./components/Campaigns";
import Layout from "./Layout/Layout";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Accounts />} />
          <Route path="/profiles/:accountId" element={<Profiles />} />
          <Route
            path="/profiles/:accountId/campaigns/:profileId"
            element={<Campaigns />}
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
