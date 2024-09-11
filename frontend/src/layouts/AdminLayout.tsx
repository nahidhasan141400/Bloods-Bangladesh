import { Navigate, Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/Admin/Auth/AdminLogin";
import { useGetAdminQuery } from "../redux/api/adminApi/AdminApi";
import Loading from "../components/Loading/Loading";
import AdminNavbar from "../components/shared/navbar/AdminNavbar";

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
        <h1>Admin Dashboard</h1>
      </div>
    </>
  );
};
