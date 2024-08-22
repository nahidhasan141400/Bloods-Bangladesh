import { Navigate } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import { useGetUserQuery } from "../../../redux/api/authApi/authApi";
import Welcome from "./Welcome";
import StepsForm from "./step/StepsForm";

const SetInformation = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  if (isLoading) return <Loading />;

  return data ? (
    <div>
      <Welcome value={!data?.donor} />
      <div className="w-full relative max-w-7xl mx-auto p-2">
        <div className="p-5 rounded-lg overflow-hidden relative text-white bg-gradient-to-tr from-primary/50 to-secondary/80">
          <h1 className="text-3xl font-bold text-center">Welcome</h1>
          <h1 className="text-center font-light">Share Your Information</h1>
          <img
            src="/bg-1.png"
            alt="bloodbd.com"
            className="absolute w-8/12 sm:w-7/12 md:w-5/12 bottom-0 -z-10 right-0"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-1 mt-10">
        <StepsForm />
      </div>
      <div className="p-3 py-5">
        <footer className="w-full text-center">
          {" "}
          ©2024 All Rights Reserved. Bloods Bangladesh
        </footer>
      </div>
    </div>
  ) : (
    <Navigate to={"/auth/login"} />
  );
};

export default SetInformation;
