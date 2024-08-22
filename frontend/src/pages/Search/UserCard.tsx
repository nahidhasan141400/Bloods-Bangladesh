import { Avatar, Button, Card } from "antd";

const UserCard = () => {
  return (
    <Card size="small">
      <div className="flex justify-start gap-3">
        <div>
          <Avatar
            alt="A+"
            icon={<p className="text-lg font-bold">A+</p>}
            size={70}
            style={{
              background: "#df0000",
            }}
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Nahid Hasan</h1>
          <p className="font-light text-sm">
            374(3rd Floor), Bangla Complex (Lift-4), Mirpur-1 , Dhaka -1216,
            Bangladesh.
          </p>
        </div>
      </div>
      <div className="w-full relative flex gap-2 mt-2">
        <Button block type="primary" icon={<>📃</>}>
          Details
        </Button>
        <Button block type="dashed" icon={<>📞</>}>
          Call
        </Button>
      </div>
    </Card>
  );
};

export default UserCard;
