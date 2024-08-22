/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from "react-router-dom";
import { useGetUserQuery } from "../redux/api/authApi/authApi";
import { FC, ReactNode } from "react";
import Loading from "../components/Loading/Loading";
const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { data, isLoading } = useGetUserQuery(undefined);
  if (isLoading) return <Loading />;
  console.log(data);

  return data ? (
    data?.donor ? (
      <>{children}</>
    ) : (
      <Navigate to={"/dashboard/setInfo"} />
    )
  ) : (
    <Navigate to={"/auth/login"} />
  );
};

export default ProtectedRoute;
