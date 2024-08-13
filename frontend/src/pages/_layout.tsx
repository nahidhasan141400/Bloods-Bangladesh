import Circle from "@/components/background/circle";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
     <Circle.Circle1 />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
