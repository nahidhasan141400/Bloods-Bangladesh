import Container from "../../components/ui/Container";

const OurHeros = () => {
  return (
    <Container className="my-20">
      <div>
        <h1 className="text-4xl text-center font-bold">
          Our <span className="text-primary">Hero&apos;s</span>
        </h1>
      </div>
      <div className="w-[80%] m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mt-10">
        {/* start  */}
        <div className="flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
            src="/images/heroImg.webp"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Mugdho</h1>
          <p className="text-sm">5 times</p>
        </div>
        {/* end  */}
        {/* start  */}
        <div className="flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
            src="/images/heroImg.webp"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Mugdho</h1>
          <p className="text-sm">5 times</p>
        </div>
        {/* end  */}
        {/* start  */}
        <div className="flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
            src="/images/heroImg.webp"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Mugdho</h1>
          <p className="text-sm">5 times</p>
        </div>
        {/* end  */}
        {/* start  */}
        <div className="flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
            src="/images/heroImg.webp"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Mugdho</h1>
          <p className="text-sm">5 times</p>
        </div>
        {/* end  */}
        {/* start  */}
        <div className="flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
            src="/images/heroImg.webp"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Mugdho</h1>
          <p className="text-sm">5 times</p>
        </div>
        {/* end  */}
      </div>
    </Container>
  );
};

export default OurHeros;
