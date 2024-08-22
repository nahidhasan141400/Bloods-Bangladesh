import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import Container from "../../components/ui/Container";
const OurHeros = () => {
  return (
    <Container className="my-20 px-0">
      <div>
        <h1 className="text-4xl text-center font-bold mb-6">
          Our <span className="text-primary">Hero&apos;s</span>
        </h1>
      </div>
      <div className="w-full">
        {/* start  */}
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
          <SwiperSlide className="items-center flex justify-center w-24 md:w-32">
            <div className="flex  md:w-32 flex-col w-full  items-center">
              <img
                className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
                src="/images/heroImg.webp"
                alt="bloodsbd.com"
              />
              <h1 className="text-xl font-medium">Mugdho</h1>
              <p className="text-sm">5 times</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="items-center flex justify-center w-24 md:w-32">
            <div className="flex  md:w-32 flex-col w-full  items-center">
              <img
                className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
                src="/images/heroImg.webp"
                alt="bloodsbd.com"
              />
              <h1 className="text-xl font-medium">Mugdho</h1>
              <p className="text-sm">5 times</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="items-center flex justify-center w-24 md:w-32">
            <div className="flex  md:w-32 flex-col w-full  items-center">
              <img
                className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
                src="/images/heroImg.webp"
                alt="bloodsbd.com"
              />
              <h1 className="text-xl font-medium">Mugdho</h1>
              <p className="text-sm">5 times</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="items-center flex justify-center w-24 md:w-32">
            <div className="flex  md:w-32 flex-col w-full  items-center">
              <img
                className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
                src="/images/heroImg.webp"
                alt="bloodsbd.com"
              />
              <h1 className="text-xl font-medium">Mugdho</h1>
              <p className="text-sm">5 times</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="items-center flex justify-center w-24 md:w-32">
            <div className="flex  md:w-32 flex-col w-full  items-center">
              <img
                className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
                src="/images/heroImg.webp"
                alt="bloodsbd.com"
              />
              <h1 className="text-xl font-medium">Mugdho</h1>
              <p className="text-sm">5 times</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="items-center flex justify-center w-24 md:w-32">
            <div className="flex  md:w-32 flex-col w-full  items-center">
              <img
                className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
                src="/images/heroImg.webp"
                alt="bloodsbd.com"
              />
              <h1 className="text-xl font-medium">Mugdho</h1>
              <p className="text-sm">5 times</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="items-center flex justify-center w-24 md:w-32">
            <div className="flex  md:w-32 flex-col w-full  items-center">
              <img
                className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
                src="/images/heroImg.webp"
                alt="bloodsbd.com"
              />
              <h1 className="text-xl font-medium">Mugdho</h1>
              <p className="text-sm">5 times</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="items-center flex justify-center w-24 md:w-32">
            <div className="flex  md:w-32 flex-col w-full  items-center">
              <img
                className="rounded-full object-cover mb-1 size-24 md:size-32 border-2 border-red-500"
                src="/images/heroImg.webp"
                alt="bloodsbd.com"
              />
              <h1 className="text-xl font-medium">Mugdho</h1>
              <p className="text-sm">5 times</p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* end  */}
      </div>
    </Container>
  );
};

export default OurHeros;
