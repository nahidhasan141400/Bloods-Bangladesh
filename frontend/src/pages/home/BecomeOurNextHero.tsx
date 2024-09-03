import { Link } from "react-router-dom";

const BecomeOurNextHero = () => {
  return (
    <div className="max-w-5xl px-3 mx-auto ">
      <div
        style={{
          borderRadius: "30px",
          background:
            "radial-gradient(95.7% 122.85% at 97.67% 92.66%, #FF7177 0%, #B30000 100%)",
        }}
        className="bg-p1 relative mt-28 mb-10 h-80 md:h-auto p-16 flex justify-center md:justify-end"
      >
        <img
          src={"/images/person.png"}
          alt="person"
          className="absolute z-10 -left-20 md:left-10 bottom-0 h-[360px]"
        />

        <div className="md:mx-16 flex z-20 justify-center relative -right-16 md:right-0 md:bottom-0 bottom-10 items-center gap-5 flex-col">
          <h1 className="text-xl md:text-4xl font-bold text-gray-200">
            Become Our Next Hero
          </h1>
          <Link to={"/"}>
            <button className="bg-white text-black px-10 py-3 rounded-lg text-base md:text-xl font-semibold">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BecomeOurNextHero;
