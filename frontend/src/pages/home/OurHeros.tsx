/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import Container from "../../components/ui/Container";
import { useGet20UserQuery } from "../../redux/api/authApi/authApi";
import { imagePath } from "../../Utils/Imgpath";
import { Avatar } from "antd";
const OurHeros = () => {
  const { data, isLoading } = useGet20UserQuery({});
  console.log("🚀 ~ OurHeros ~ data:", data);
  return (
    <Container className="my-20 px-0">
      <div>
        <h1 className="text-4xl text-center font-bold mb-6">
          Our <span className="text-primary">Hero&apos;s</span>
        </h1>
      </div>
      <div className="w-full">
        {isLoading ? (
          "loading"
        ) : (
          <Swiper
            className="relative mx-auto "
            pagination={true}
            modules={[Autoplay]}
            autoplay={true}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              // when window width is >= 320px (phone)
              320: {
                slidesPerView: 3,
              },
              // when window width is >= 768px (tablet)
              768: {
                slidesPerView: 5,
              },
              // when window width is >= 1024px (desktop)
              1024: {
                slidesPerView: 7,
              },
            }}
          >
            {data.map((user: any, index: number) => {
              return (
                <SwiperSlide
                  key={index}
                  className="items-center flex justify-center w-24 md:w-32"
                >
                  <div className="flex  md:w-32 flex-col w-full  items-center">
                    <Avatar
                      size={100}
                      className="bg-red-600"
                      src={imagePath.profile(user.photo) || ""}
                    >
                      {user?.name[0]}
                    </Avatar>
                    {/* <img
                      className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
                     
                      alt="bloodsbd.com"
                    /> */}
                    <h1 className="text-center font-medium">{user?.name}</h1>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        {/* start  */}

        {/* end  */}
      </div>
    </Container>
  );
};

export default OurHeros;
