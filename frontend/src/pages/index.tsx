import BecomeOurNextHero from "@/components/pages/home/BecomeOurNextHero";
import Hero from "@/components/pages/home/Hero";

import OurHeros from "@/components/pages/home/OurHeros";
import SearchDonor from "@/components/pages/home/SearchDonor";

export default function Home() {
  return (
    <section>
      <Hero />
      <SearchDonor />
      <OurHeros />
      <BecomeOurNextHero />
    </section>
  );
}
