import { Navigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import { useGetUserQuery } from "../../../redux/api/authApi/authApi";
import Welcome from "./Welcome";
import StepsForm from "./step/StepsForm";

const SetInformation = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  if (isLoading) return <Loading />;
  console.log(data);
  return data ? <div>
    <Welcome value={!data?.donor} />
    <div className="max-w-7xl mx-auto mt-10">
    <StepsForm />
    </div>
  </div> : <Navigate to={"/auth/login"} />;
};

export default SetInformation;
