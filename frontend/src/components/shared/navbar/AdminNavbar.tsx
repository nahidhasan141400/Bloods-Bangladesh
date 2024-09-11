/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from "antd";
import { FC } from "react";
import { imagePath } from "../../../Utils/Imgpath";

const AdminNavbar: FC<{ admin: any }> = ({ admin }) => {
  console.log("🚀 ~ admin:", admin);
  return (
    <div className="w-full p-2 flex justify-between container mx-auto">
      <div>
        <img
          src="/images/logo/logo-inline.png"
          alt="bloods bd"
          className="w-56"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="text-right">
          <p className="text-xl font-bold">{admin?.name}</p>
          <p className="text-xs font-light">{admin?.email}</p>
        </div>
        <Avatar
          className="bg-red-500"
          size={52}
          src={imagePath.admin(admin.photo)}
        >
          {" "}
          {admin?.name[0]}{" "}
        </Avatar>
      </div>
    </div>
  );
};

export default AdminNavbar;
