import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BecomeOurNextHero = () => {
  return (
    <Container >
      <div
        style={{
          borderRadius: "30px",
          background:
            "radial-gradient(95.7% 122.85% at 97.67% 92.66%, #FF7177 0%, #B30000 100%)",
        }}
        className="relative mt-28 mb-10 p-16 flex justify-end"
      >
        <Image
          src={"/images/person.png"}
          alt="person"
          width={500}
          height={500}
          className="absolute left-10 bottom-0 h-[360px]"
        />

        <div className="mx-16 flex justify-center items-center gap-5 flex-col">
          <h1 className="text-4xl font-bold text-gray-200">Become Our Next Hero</h1>
          <Link href={"/register"}>
            <button className="bg-white text-black px-20 py-3 rounded-lg text-xl font-semibold">Register Now</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default BecomeOurNextHero;
