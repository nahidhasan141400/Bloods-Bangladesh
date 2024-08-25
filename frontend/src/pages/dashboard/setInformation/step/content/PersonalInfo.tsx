/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import type { FormProps } from "antd";
import { Form, Input, Select, DatePicker, Button } from "antd";
import { bloodsGroups } from "../../../../../data/stepsData";

const { Option } = Select;

type FieldType = {
  name?: string;
  email?: string;
  phone?: string;
  date_of_birth?: string;
  gender?: string;
  blood_group?: string;
};

const PersonalInfo = ({
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
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setData(values);
    setCurrent(current + 1);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="m-2 md:mx-10  md:mt-10"
      initialValues={defaultValues ? defaultValues : " "}
    >
      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 md:gap-4">
        {/* Name */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input size="large" placeholder="Enter your name" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input size="large" placeholder="Enter your email" />
        </Form.Item>

        {/* Phone */}
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
            {
              pattern:
                /^(?:\+88|88)?01[3-9]\d{8}(?:,(?:\+88|88)?01[3-9]\d{8})*$/,
              message: "Please enter a valid phone Bangladeshi number",
            },
          ]}
        >
          <Input size="large" placeholder="Enter your phone number" />
        </Form.Item>

        {/* Date of Birth */}
        <Form.Item
          label="Date of Birth"
          name="date_of_birth"
          rules={[
            { required: true, message: "Please select your date of birth!" },
          ]}
        >
          <DatePicker
            size="large"
            style={{ width: "100%" }}
            placeholder="Select your date of birth"
          />
        </Form.Item>

        {/* Gender */}
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Select size="large" placeholder="Select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        {/* Blood Group */}
        <Form.Item
          label="Blood Group"
          name="blood_group"
          rules={[
            { required: true, message: "Please select your blood group!" },
          ]}
        >
          <Select
            showSearch
            size="large"
            placeholder="Select your blood group"
            options={bloodsGroups}
          />
        </Form.Item>
      </div>

      {/* Submit Button */}
      <div className="text-end mt-3 md:mt-10 mb-5">
        <Button size="large" type="primary" htmlType="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default PersonalInfo;
