import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger,useGSAP);

const SacrificeSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  console.log(containerRef.current?.offsetWidth);
  useGSAP(() => {
      gsap.to(".subContainer", {
        xPercent: -100 * 3.8,
        scrollTrigger: {
          trigger: containerRef.current,
          pin:true,
          scrub: 2,
          start: "top 15%",
          end: () => "+=" + containerRef.current?.offsetWidth,
          markers: false
        }
      })
  },{scope: containerRef})

  return (
    <div ref={containerRef} className=" w-full my-10 md:my-20 overflow-hidden">
      <div className="flex h-[50vh] lg:h-[75vh] subContainer" >
        <img src="../../../public/images/heros/abu-sayed.jpg" alt="" />
        <img src="../../../public/images/heros/dipto-dey.jpg" alt="" />
        <img
          src="../../../public/images/heros/faisal-ahmed-shanto.jpg"
          alt=""
        />
        <img src="../../../public/images/heros/farhan-faiyaaz.jpg" alt="" />
        <img
          src="../../../public/images/heros/jahiduzzaman-tanvin.jpg"
          alt=""
        />
        <img src="../../../public/images/heros/md-wasim-akrum.jpg" alt="" />
        <img src="../../../public/images/heros/mir-mugdho.jpg" alt="" />
        <img src="../../../public/images/heros/rudro-sen.jpg" alt="" />
        <img src="../../../public/images/heros/sakib-hasan.jpg" alt="" />
        <img src="../../../public/images/heros/shakil-parvej.jpg" alt="" />
        <img
          src="../../../public/images/heros/sheikh-fahmin-zafor.jpg"
          alt=""
        />
        <img
          src="../../../public/images/heros/shykh-aashhabul-yamin.jpg"
          alt=""
        />
        <img src="../../../public/images/heros/tahmid-tamim.jpg" alt="" />
        <img src="../../../public/images/heros/zillur-sheikh.jpg" alt="" />
      </div>
    </div>
  );
};

export default SacrificeSection;
