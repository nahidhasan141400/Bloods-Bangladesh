import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";

export interface IServicesData {
  img: string;
  icon: string;
  title: string;
  des: string;
  path: string;
}

const servicesData: IServicesData[] = [
  {
    img: "/images/home/r1.jpg",
    icon: "/images/home/d1.png",
    title: "Become a Donar",
    des: "By becoming a blood donor, you can make a direct impact in saving lives.Your generosity provides hope to those in critical need of blood.",
    path: "/auth/register",
  },
  {
    img: "/images/home/r2.jpg",
    icon: "/images/home/d2.png",
    title: "Why Give Blood?",
    des: "Donating blood is a simple act that makes a profound difference.Learn how your contribution can help save lives and improve health.",
    path: "https://www.aabb.org/for-donors-patients/why-donate-blood",
  },
  {
    img: "/images/home/r3.jpg",
    icon: "/images/home/d3.png",
    title: "How Donations Help?",
    des: "Every blood donation plays a crucial role in medical treatments and emergencies.See how your contribution helps support patients and healthcare systems.",
    path: "https://www.redcrossblood.org/donate-blood/how-to-donate/how-blood-donations-help.html",
  },
];

export default function OurServices() {
  return (
    <div className="bg-gray-200 py-16 bg-p1">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData?.map((data: IServicesData, i: number) => {
          return <OurServicesCard key={i} data={data} />;
        })}
      </Container>
    </div>
  );
}

const OurServicesCard = ({ data }: { data: IServicesData }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white group rounded flex flex-col justify-between"
    >
      <div className="px-5 py-5">
        <div className="relative mb-16">
          <img
            src={data?.img}
            alt="img"
            className="w-full rounded h-full object-cover"
          />
          {/* wrapper img  */}
          <div className="absolute -bottom-[15%] w-full flex justify-center ">
            <div className="bg-gray-950 group-hover:bg-primary transition-all duration-500  px-7 py-5 rounded w-fit h-fit">
              <img
                src={data?.icon}
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-semibold ">{data?.title}</h1>
          <p className="mt-5 text-center text-gray-700 tracking-wide leading-7 mb-2">
            {data?.des}
          </p>
        </div>
      </div>

      <div className="bg-gray-950 text-white text-center  group-hover:bg-primary transition-all duration-500  rounded-b py-4 text-[17px] font-medium">
        <Link to={data?.path}>
          <button className="">Read More</button>
        </Link>
      </div>
    </div>
  );
};
