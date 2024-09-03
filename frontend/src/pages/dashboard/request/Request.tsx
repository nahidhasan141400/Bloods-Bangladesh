import { Button, Card } from "antd";

const Request = () => {
  return (
    <div>
      <div className="py-3 text-xl mt-3 font-bold">
        Some One Search For Blood :
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
    </div>
  );
};

export default Request;

const RequestCard = () => {
  return (
    <Card className="shadow-md">
      <div className="flex items-center gap-2">
        <div className="w-full ">
          <p className="text-sm font-light text-slate-500">Name :</p>
          <h1 className="text-lg">Nahid Hasan</h1>
          <p className="text-sm font-light text-slate-500">Address :</p>
          <h1 className="text-lg">Mirpur-1, Dhaka (square Hospital) now </h1>
        </div>
        <div>
          <p className="font-bold text-slate-100 shadow-md shadow-red-800 text-xl size-16 rounded-full flex justify-center items-center bg-red-500">
            AB+
          </p>
        </div>
      </div>
      {/* action */}
      <div className="w-full flex gap-2 mt-2">
        <Button type="primary" block>
          Details
        </Button>
        <Button type="dashed" block>
          Donate
        </Button>
      </div>
    </Card>
  );
};
