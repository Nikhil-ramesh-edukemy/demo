import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import LayoutPage from "./pages/LayoutPage";
import MaintainancePage from "./pages/MaintainancePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="maintainance" element={<MaintainancePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
