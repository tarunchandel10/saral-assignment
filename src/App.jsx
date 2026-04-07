import { BrowserRouter, Routes, Route } from "react-router-dom";
import CampaignPage from "./pages/CampaignPage";
import { Navigate } from "react-router-dom";
import InsightsPage from "./pages/InsightsPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import PaymentsPage from "./pages/PaymentsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* 🔥 Default redirect */}
        <Route path="/" element={<Navigate to="/gamification" />} />

        {/* Pages */}
        <Route path="/gamification" element={<CampaignPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/payments" element={<PaymentsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;