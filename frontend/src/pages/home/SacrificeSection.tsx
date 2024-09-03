import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const SacrificeSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  console.log(containerRef.current?.offsetWidth);
  useGSAP(
    () => {
      const widthMultiplier = window.innerWidth < 768 ? 13 : 3.8;
      gsap.to(".subContainer", {
        xPercent: -100 * widthMultiplier,
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 2,
          start: "top 15%",
          end: () => "+=" + containerRef.current?.offsetWidth,
          markers: false,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full my-20 overflow-hidden">
      <div className="flex h-[65vh] md:h-[75vh] subContainer">
        <img
          src="/images/heros/abu-sayed.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/dipto-dey.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/faisal-ahmed-shanto.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/farhan-faiyaaz.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/jahiduzzaman-tanvin.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/md-wasim-akrum.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/mir-mugdho.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/rudro-sen.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/sakib-hasan.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/shakil-parvej.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/sheikh-fahmin-zafor.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/shykh-aashhabul-yamin.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/tahmid-tamim.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="/images/heros/zillur-sheikh.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SacrificeSection;
