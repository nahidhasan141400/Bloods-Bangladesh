/* eslint-disable @next/next/no-img-element */
import Container from "@/components/ui/Container";

const OurHeros = () => {
  return (
    <Container className="my-20">
      <div>
        <h1 className="text-4xl text-center font-bold">
          Our <span className="text-primary">Hero&apos;s</span>
        </h1>
      </div>
      <div className="w-[80%] m-auto flex flex-wrap justify-evenly gap-1 mt-10">
        <div className="flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1"
            src="/images/girl.png"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Jenny</h1>
          <p className="text-sm">5 times</p>
        </div>

        <div className=" flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1"
            src="/images/girl.png"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Jenny</h1>
          <p className="text-sm">5 times</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1"
            src="/images/girl.png"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Jenny</h1>
          <p className="text-sm">5 times</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1"
            src="/images/girl.png"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Jenny</h1>
          <p className="text-sm">5 times</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="rounded-full object-cover mb-1"
            src="/images/girl.png"
            alt="girl"
          />
          <h1 className="text-xl font-medium">Jenny</h1>
          <p className="text-sm">5 times</p>
        </div>
      </div>
    </Container>
  );
};

export default OurHeros;
