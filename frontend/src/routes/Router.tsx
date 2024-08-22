import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import EmailVerification from "../pages/auth/EmailVerification";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import DashboardRoutes from "../pages/dashboard/DashboardRoutes";
import ProtectedRoute from "./ProtectedRoute";
import SearchDonor from "../pages/Search/SearchDonor";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchDonor />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="email-verification" element={<EmailVerification />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
