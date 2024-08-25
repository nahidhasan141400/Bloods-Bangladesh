import { Button, Descriptions, DescriptionsProps } from "antd";

/* eslint-disable @typescript-eslint/no-explicit-any */

const ShowFields = ({ data, current, setCurrent }: any) => {
  const handleSubmit = () => {
    console.log(data);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Name",
      children: <p>{data?.name}</p>,
    },
    {
      key: "2",
      label: "Email",
      children: <p>{data?.email}</p>,
    },
    {
      key: "3",
      label: "Phone",
      children: <p>{data?.phone}</p>,
    },
    {
      key: "4",
      label: "Date of Birth",
      children: (
        <p>{new Date(data?.date_of_birth).toISOString().split("T")[0]}</p>
      ),
    },
    {
      key: "5",
      label: "Gender",
      children: <p>{data?.gender}</p>,
    },
    {
      key: "6",
      label: "Blood Group",
      children: <p>{data?.blood_group}</p>,
    },
    {
      key: "7",
      label: "Address",
      children: <p>{data?.addressline}</p>,
    },
    {
      key: "8",
      label: "Country",
      children: <p>{data?.country}</p>,
    },
    {
      key: "9",
      label: "District",
      children: <p>{data?.district}</p>,
    },
    {
      key: "10",
      label: "Division",
      children: <p>{data?.division}</p>,
    },
    {
      key: "11",
      label: "Upozala",
      children: <p>{data?.upozila}</p>,
    },
  ];
  return (
    <div className="md:p-5 p-2 flex justify-center items-center flex-col w-full h-full">
      <Descriptions title="Donar Info" items={items} />
      <div className="mt-3 md:mt-10 mb-5 h-fit w-full gap-1 flex items-center justify-end">
        <Button
          onClick={handleSubmit}
          size="large"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>

        <Button size="large" onClick={() => prev()}>
          Previous
        </Button>
      </div>
    </div>
  );
};

export default ShowFields;
