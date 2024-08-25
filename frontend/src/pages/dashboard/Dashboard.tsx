import Loading from "../../components/Loading/Loading";
import { useGetUserQuery } from "../../redux/api/authApi/authApi";
import SideBar from "./SideBar";

const Dashboard = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  console.log("🚀 ~ ProtectedRoute ~ data:", data);
  if (isLoading) return <Loading />;

  return (
    <main className="w-full container mx-auto">
      <div className="rounded-lg flex justify-between p-2">
        <div className="p-5 bg-slate-400 inline-block rounded-md"></div>
        <SideBar />
      </div>
      {/* body */}
      {/* Banner  */}
      <div>
        <img src="/banner.png" alt="" />
      </div>
    </main>
  );
};

export default Dashboard;
