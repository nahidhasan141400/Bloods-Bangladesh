/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button } from "antd";
import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import AnimatedBtn from "./AnimatedBtn";
import { FC } from "react";

const HeroSection: FC<{ user: any }> = ({ user }) => {
  return (
    <div className="w-full relative">
      <Container className="grid grid-cols-1 md:grid-cols-2 ">
        {/* CTA */}
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <img
            src={"/images/logo.png"}
            className="w-52 md:w-60"
            alt="bloods bd logo"
          />
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-primary mt-2 md:mt-0">
            BLOODSBD.COM
          </h1>
          <p className="text-lg px-4 md:px-0 text-center md:text-xl">
            Be the Reason Someone Smiles Today Donate Blood and Save Lives.
          </p>
          {/* style button */}
          <div className="w-full relative justify-center flex gap-3 flex-col md:flex-row">
            {user ? (
              <Link to={"/dashboard"} className="w-full">
                <AnimatedBtn text="Go To Dashboard" />
              </Link>
            ) : (
              <Link to={"/auth/login"} className="w-full">
                <AnimatedBtn text="Become A Hero" />
              </Link>
            )}

            <Link to={"/search"} className="w-full">
              <AnimatedBtn text="Search Donor" />
            </Link>
          </div>

          <div className="hidden xl:grid grid-cols-3 mt-10 justify-center gap-3 w-full">
            <div className="w-full flex flex-col justify-center items-center p-4 gap-3">
              <p className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-primary">
                Donner
              </p>
              <p className="text-gray-800 font-bold text-xl">200</p>
            </div>

            <div className="w-full flex flex-col justify-center items-center p-4 gap-3">
              <p className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-primary">
                Organization
              </p>
              <p className="text-gray-800 font-bold text-xl">200</p>
            </div>

            <div className="w-full flex flex-col justify-center items-center p-4 gap-3">
              <p className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-primary">
                Blood Bank
              </p>
              <p className="text-gray-800 font-bold text-xl">200</p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full px-3 2xl:px-16 pt-8">
          <img
            src={"/images/hero.png"}
            alt="bloods bangladesh"
            className="w-full"
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
