import Loading from "../../components/Loading/Loading";
import { useGetUserQuery } from "../../redux/api/authApi/authApi";
import Menu from "./Menu/Menu";
import Request from "./request/Request";
import SideBar from "./SideBar";

const Dashboard = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  console.log("🚀 ~ ProtectedRoute ~ data:", data);
  if (isLoading) return <Loading />;

  return (
    <main className="w-full container mx-auto">
      <div className="rounded-lg flex justify-between items-center p-2">
        <div>
          <img src="/images/logo/Logo.png" alt="" className="h-12 mx-3" />
        </div>
        <SideBar />
      </div>
      {/* body */}
      {/* Banner  */}
      <Menu />
      <Request />
    </main>
  );
};

export default Dashboard;
