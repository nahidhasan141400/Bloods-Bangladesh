import style from "./loading.module.css";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white/90 backdrop-blur-md top-0 left-0 fixed z-[2000]">
      <div className={style.heartbeatloader}>
        <svg
          className={style.svgdraw}
          width="100%"
          height="100%"
          viewBox="0 0 150 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={style.path}
            d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
            fill="transparent"
            strokeWidth={4}
            stroke="black"
          />
        </svg>
        <div className={style.innercircle} />
        <div className={style.outercircle} />
      </div>
      {/* <p className="text-xl font-extralight">Bloodsbd.com</p> */}
    </div>
  );
};

export default Loading;
