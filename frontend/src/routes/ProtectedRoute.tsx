import { Navigate, Route, Routes } from "react-router-dom";
import { useGetUserQuery } from "../redux/api/authApi/authApi";

import Loading from "../components/Loading/Loading";
import Dashboard from "../pages/dashboard/Dashboard";

const ProtectedRoute = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  console.log("🚀 ~ ProtectedRoute ~ data:", data);
  if (isLoading) return <Loading />;

  if (!data) return <Navigate to={"/auth/login"} />;

  if (!data?.donor) return <Navigate to={"/dashboard/setup-profile"} />;

  return (
    <>
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default ProtectedRoute;
