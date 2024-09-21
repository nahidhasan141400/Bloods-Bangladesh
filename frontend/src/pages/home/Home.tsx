import { Alert, Button } from "antd";
import Loading from "../../components/Loading/Loading";
import Bg from "../../components/shared/bg";
import { useGetUserQuery } from "../../redux/api/authApi/authApi";
import Banner from "./Banner";
import BecomeOurNextHero from "./BecomeOurNextHero";
import HeroSection from "./HeroSection";
import OurHeros from "./OurHeros";
import { Link } from "react-router-dom";
// import SacrificeSection from "./SacrificeSection";
import OurServices from "./OurServices";
import AboutBloodBd from "./AboutBloodBd";
import NearBy from "./NearBy/NearBy";

const Home = () => {
  const { data, isLoading } = useGetUserQuery({});
  return (
    <div>
      {isLoading && <Loading />}
      <div className="px-2 max-w-4xl mx-auto ">
        {data
          ? !data?.donor && (
              <Alert
                action={
                  <Link to={"/dashboard"}>
                    <Button type="primary">Setup Now</Button>
                  </Link>
                }
                type="warning"
                showIcon
                message={"You Don't Setup Your Information"}
                closable
              />
            )
          : ""}
      </div>
      <Bg />
      <HeroSection user={data} />
      <Banner />
      <OurServices />
      <NearBy />
      <AboutBloodBd />
      <OurHeros />
      <BecomeOurNextHero />
      {/* <SacrificeSection /> */}
    </div>
  );
};

export default Home;
