/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const UserCard: FC<{ data: any }> = ({ data }) => {
  return (
    <Card size="small">
      <div className="flex justify-start gap-3">
        <div>
          <Avatar
            alt={data?.blood_group}
            icon={<p className="text-lg font-bold">{data?.blood_group}</p>}
            size={70}
            style={{
              background: "#df0000",
            }}
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold">{data?.name}</h1>
          <p className="font-light text-sm">{data?.address}</p>
        </div>
      </div>
      <div className="w-full relative flex gap-2 mt-2">
        <Link to={"/donor/" + data.id}>
          <Button block type="primary" icon={<>📃</>}>
            Details
          </Button>
        </Link>
        <a href={"tel:" + data?.phone}>
          <Button block type="dashed" icon={<>📞</>}>
            Call
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default UserCard;
