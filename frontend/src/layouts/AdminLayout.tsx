import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/Admin/Auth/AdminLogin";

const AdminLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
