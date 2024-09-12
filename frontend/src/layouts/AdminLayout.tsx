import { Navigate, Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/Admin/Auth/AdminLogin";
import { useGetAdminQuery } from "../redux/api/adminApi/AdminApi";
import Loading from "../components/Loading/Loading";
import AdminNavbar from "../components/shared/navbar/AdminNavbar";
import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";
import User from "../pages/Admin/users/User";
import Donor from "../pages/Admin/Donor/Donor";

const AdminLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/dashboard/*" element={<AdminProtectedRoute />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
const AdminProtectedRoute = () => {
  const { data, isLoading } = useGetAdminQuery({});

  if (isLoading) return <Loading />;
  if (!data) {
    return <Navigate to="/we/admin/login" />;
  }

  return (
    <>
      <AdminNavbar admin={data} />
      <div className="container mx-auto">
        <div>
          <Routes>
            <Route index element={<AdminDashboard />} />
            <Route path="/users" element={<User />} />
            <Route path="/donor" element={<Donor />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
