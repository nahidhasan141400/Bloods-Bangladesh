const Banner = () => {
  return (
    <div className="w-full relative pb-10 md:mt-10 mt-3 ">
      <img
        data-aos="fade-up"
        src="/banner.png"
        alt="banner"
        className="w-full max-w-3xl mx-auto rounded-xl"
      />
      <img
        className="absolute w-80 bottom-0 right-0 -z-10"
        src="/images/leaf.svg"
        alt="bd"
      />
    </div>
  );
};

export default Banner;
