/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dispatch, SetStateAction, useState } from "react";
import { Button, Form, FormProps, Input, Select } from "antd";
import { districts, upozilas } from "../../../../../data/address";

const { Option } = Select;

const divisions = [
  { value: "dhaka", label: "Dhaka" },
  { value: "chattogram", label: "Chattogram" },
  { value: "khulna", label: "Khulna" },
  { value: "rajshahi", label: "Rajshahi" },
  { value: "barishal", label: "Barishal" },
  { value: "sylhet", label: "Sylhet" },
  { value: "rangpur", label: "Rangpur" },
  { value: "mymensingh", label: "Mymensingh" },
];

const ContactInfo = ({
  current,
  setCurrent,
  setData,
  defaultValues,
}: {
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  setData: Dispatch<SetStateAction<any>>;
  defaultValues: any;
}) => {
  const [selectedDivision, setSelectedDivision] = useState<
    string | undefined
  >();
  const [selectedDistrict, setSelectedDistrict] = useState<
    string | undefined
  >();

  const handleDivisionChange = (value: string) => {
    setSelectedDivision(value);
    setSelectedDistrict(undefined);
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
  };

  const onFinish: FormProps<any>["onFinish"] = (values) => {
    setData(values);
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Form
      initialValues={defaultValues ? defaultValues : " "}
      layout="vertical"
      onFinish={onFinish}
      className="m-2 md:mx-10  md:mt-10"
    >
      {/* Addressline */}
      <Form.Item
        label="Addressline"
        name="addressline"
        rules={[{ required: true, message: "Please enter your address!" }]}
      >
        <Input size="large" placeholder="Enter your address" />
      </Form.Item>

      <div className="grid md:grid-cols-2 md:gap-4">
        {/* Country */}
        <Form.Item
          label="Country"
          name="country"
          initialValue="Bangladesh"
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select size="large" disabled>
            <Option value="Bangladesh">Bangladesh</Option>
          </Select>
        </Form.Item>
        {/* Division */}
        <Form.Item
          label="Division"
          name="division"
          rules={[{ required: true, message: "Please select your division!" }]}
        >
          <Select
            size="large"
            placeholder="Select your division"
            onChange={handleDivisionChange}
          >
            {divisions.map((division) => (
              <Option key={division.value} value={division.value}>
                {division.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* District */}
        <Form.Item
          label="District"
          name="district"
          rules={[{ required: true, message: "Please select your district!" }]}
        >
          <Select
            size="large"
            placeholder="Select your district"
            onChange={handleDistrictChange}
            disabled={!selectedDivision}
          >
            {selectedDivision &&
              //@ts-expect-error skip if division
              districts[selectedDivision]?.map((district) => (
                <Option key={district} value={district}>
                  {district}
                </Option>
              ))}
          </Select>
        </Form.Item>

        {/* Upozila */}
        <Form.Item
          label="Upozila"
          name="upozila"
          rules={[{ required: true, message: "Please select your upozila!" }]}
        >
          <Select
            size="large"
            placeholder="Select your upozila"
            disabled={!selectedDistrict}
          >
            {selectedDistrict &&
              //@ts-expect-error skip if division
              upozilas[selectedDistrict]?.map((upozila) => (
                <Option key={upozila} value={upozila}>
                  {upozila}
                </Option>
              ))}
          </Select>
        </Form.Item>
      </div>
      {/* Submit Button */}
      <div className="mt-3 md:mt-10 mb-5 h-fit gap-1 flex items-center justify-end">
        
          <Button size="large" type="primary" htmlType="submit">
            Next
          </Button>
        
        <Button size="large" onClick={() => prev()}>
          Previous
        </Button>
      </div>
    </Form>
  );
};

export default ContactInfo;
