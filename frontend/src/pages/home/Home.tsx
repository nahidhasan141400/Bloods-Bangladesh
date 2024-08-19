import Bg from "../../components/shared/bg";
import Banner from "./Banner";
import BecomeOurNextHero from "./BecomeOurNextHero";
import HeroSection from "./HeroSection";
import OurHeros from "./OurHeros";

const Home = () => {
  return (
    <div>
      <Bg />
      <HeroSection />
      <Banner />
      <OurHeros />
      <BecomeOurNextHero />
    </div>
  );
};

export default Home;
