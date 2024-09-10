import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import EmailVerification from "../pages/auth/EmailVerification";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

import ProtectedRoute from "./ProtectedRoute";
import SetInformation from "../pages/dashboard/setInformation/SetInformation";
import SearchDonor from "../pages/Search/SearchDonor";
import DonorDetails from "../pages/donor/DonorDetails";
import AdminLayout from "../layouts/AdminLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchDonor />} />
          <Route path="/donor/:id" element={<DonorDetails />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="email-verification" element={<EmailVerification />} />
        </Route>
        <Route path="/dashboard/setup-profile" element={<SetInformation />} />
        <Route path="/dashboard/*" element={<ProtectedRoute />} />

        {/* admin */}
        <Route path="/we/admin/*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
