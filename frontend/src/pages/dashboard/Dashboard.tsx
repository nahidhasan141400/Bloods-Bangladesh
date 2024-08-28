import Loading from "../../components/Loading/Loading";
import { useGetUserQuery } from "../../redux/api/authApi/authApi";
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
      <div className="w-full grid md:grid-cols-2 gap-2">
        <div className="w-full relative px-3">
          <img
            className="m-3 rounded-md w-full mx-auto"
            src="/banner.png"
            alt=""
          />
        </div>
        {/* menus */}
        <div className="text-center">The Website Is Under Development</div>
      </div>
    </main>
  );
};

export default Dashboard;
