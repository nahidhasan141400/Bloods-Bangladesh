import { FC } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full relative p-2 bg-slate-200 rounded-md">
          <img
            alt="bloodsbd.com"
            src="/banner.png"
            className="w-full relative rounded-md"
          />
        </div>
        {/* menu */}
        <div className="w-full relative flex gap-5 flex-wrap justify-center">
          <MenuBTN
            path="/search"
            icon="/icon/search.png"
            titel="Search Blood"
          />
          <MenuBTN path="#" icon="/icon/Donation.png" titel="Donate" />
          <MenuBTN path="#" icon="/icon/org.png" titel="Organization" />
          <MenuBTN path="#" icon="/icon/group.png" titel="My Group" />
          <MenuBTN path="#" icon="/icon/report.png" titel="Report" />
          <MenuBTN path="#" icon="/icon/Campaign.png" titel="Campaign" />
          <MenuBTN path="#" icon="/icon/request.png" titel="Request" />
        </div>
      </div>
    </div>
  );
};

export default Menu;

const MenuBTN: FC<{ icon: string; titel: string; path: string }> = ({
  icon,
  titel,
  path,
}) => {
  return (
    <Link to={path}>
      <div className="size-24 sm:size-32 flex flex-col gap-2 cursor-pointer justify-center items-center p-1 md:p-3 bg-slate-100 shadow-md rounded-md hover:shadow-xl ">
        <img
          src={icon}
          className="size-[30px] sm:size-[45px] object-contain"
          alt=""
        />
        <p className="font-bold text-sm sm:text-base">{titel}</p>
      </div>
    </Link>
  );
};
