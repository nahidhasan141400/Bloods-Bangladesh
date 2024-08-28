/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Empty, Form, Select } from "antd";
import UserCard from "./UserCard";
import {
  bloodsGroups,
  districts,
  divisions,
  upazilas,
} from "../../data/stepsData";
import { useSearchDonarMutation } from "../../redux/api/donorApi/donorApi";
import { toast } from "sonner";
import { useState } from "react";

const SearchDonor = () => {
  const [form] = Form.useForm();
  const division = Form.useWatch("division", form);
  const district = Form.useWatch("district", form);
  const [DonorData, setDonorData] = useState<any>(null);
  // from handel
  const [Search, SearchOpt] = useSearchDonarMutation();

  const Submit = async (value: any) => {
    console.log("🚀 ~ Submit ~ value:", value);
    try {
      if (SearchOpt.isLoading) {
        return;
      }
      const Res = await Search({
        country: "bangladesh",
        ...value,
      });
      if ("error" in Res) {
        return toast.error("Something is wrong");
      }
      setDonorData(Res.data);
    } catch (error) {
      console.log("🚀 ~ Submit ~ error:", error);
    }
  };
  return (
    <div className="w-full relative container mx-auto">
      <Card>
        <Form onFinish={Submit} form={form} layout="vertical">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-2">
            <Form.Item
              name={"blood"}
              label="Blood Group"
              rules={[
                {
                  required: true,
                  message: "Please select Blood Group",
                },
              ]}
            >
              <Select showSearch size="large" options={bloodsGroups} />
            </Form.Item>
            <Form.Item
              name={"division"}
              label="division"
              rules={[
                {
                  required: true,
                  message: "Please select Your country",
                },
              ]}
            >
              <Select showSearch size="large" options={divisions} />
            </Form.Item>
            <Form.Item name={"district"} label="District">
              <Select
                disabled={!division}
                showSearch
                size="large"
                // @ts-expect-error skip
                options={districts[division]?.map((e: any) => {
                  return { value: e, label: e };
                })}
              />
            </Form.Item>
            <Form.Item name={"upazila"} label="Upazila">
              <Select
                size="large"
                showSearch
                disabled={!district}
                // @ts-expect-error skip
                options={upazilas[district]?.map((e: any) => {
                  return { value: e, label: e };
                })}
              />
            </Form.Item>
          </div>
          <div className="w-full">
            <Button
              loading={SearchOpt.isLoading}
              icon="🔍"
              block
              type="primary"
              size="large"
              htmlType="submit"
            >
              Search
            </Button>
          </div>
        </Form>
      </Card>
      <div className="py-5">
        <Card loading={SearchOpt.isLoading} title="Donor Result">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {DonorData ? (
              DonorData.map((e: any, i: number) => {
                return <UserCard key={i} data={e} />;
              })
            ) : (
              <Empty />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchDonor;
