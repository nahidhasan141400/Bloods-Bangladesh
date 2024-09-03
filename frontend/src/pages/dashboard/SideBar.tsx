import { Avatar, Drawer } from "antd";
import { useGetUserQuery } from "../../redux/api/authApi/authApi";
import { useState } from "react";
import { imagePath } from "../../Utils/Imgpath";
const SideBar = () => {
  const { data } = useGetUserQuery(undefined);
  const [Open, setOpen] = useState(false);
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <h1 className="text-right font-bold">{data?.name}</h1>
            <p className="text-sm font-extralight text-right">{data?.email}</p>
          </div>
          <Avatar
            style={{
              background: "#f00",
            }}
            src={imagePath.profile(data?.photo)}
            size={45}
            icon={<>{data?.name[0]}</>}
          />
        </div>
      </div>
      <Drawer
        open={Open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="w-full  bg-gradient-to-bl from-primary to-secondary p-3 rounded-md">
          <h1 className="text-white font-bold text-xl">{data?.name}</h1>
          <h1 className="text-white font-light text-sm">{data?.email}</h1>
        </div>
      </Drawer>
    </>
  );
};

export default SideBar;
