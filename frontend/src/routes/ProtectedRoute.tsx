import { Navigate, Outlet } from "react-router-dom";
import { useGetUserQuery } from "../redux/api/authApi/authApi";

const ProtectedRoute = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  if (isLoading) return <div>Loading..</div>;
  console.log(data);
  return data ? <Outlet /> : <Navigate to={"/auth/login"} />;
};

export default ProtectedRoute;
