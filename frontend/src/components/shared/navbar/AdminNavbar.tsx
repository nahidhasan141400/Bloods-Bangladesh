/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Drawer } from "antd";
import { FC, useState } from "react";
import { imagePath } from "../../../Utils/Imgpath";
import {
  HugeiconsBlood,
  IcRoundPerson,
  MaterialSymbolsDashboard,
} from "../../icons";
import { Link } from "react-router-dom";

const AdminNavbar: FC<{ admin: any }> = ({ admin }) => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="w-full p-2 flex justify-between container items-center mx-auto">
      <div>
        <img
          src="/images/logo/logo-inline.png"
          alt="bloods bd"
          className="w-32 md:w-52"
        />
      </div>
      <div
        onClick={() => {
          setOpen(true);
        }}
        className="flex items-center gap-2"
      >
        <div className="text-right hidden md:block">
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
      <Drawer
        onClose={() => {
          setOpen(false);
        }}
        open={Open}
        title={<h1>Menus</h1>}
      >
        <div className="w-full flex flex-col gap-2 relative">
          <LinkBtn
            name={"Dashboard"}
            to={"/we/admin/dashboard"}
            Icon={MaterialSymbolsDashboard}
          />
          <LinkBtn
            name={"Donor Data"}
            to={"/we/admin/dashboard/donor"}
            Icon={HugeiconsBlood}
          />
          <LinkBtn
            name={"User"}
            to={"/we/admin/dashboard/users"}
            Icon={IcRoundPerson}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default AdminNavbar;

const LinkBtn: FC<any> = ({ to, Icon, name }) => {
  return (
    <Link to={to} className="w-full ">
      <Button icon={<Icon />} type="primary" block>
        {name}
      </Button>
    </Link>
  );
};
