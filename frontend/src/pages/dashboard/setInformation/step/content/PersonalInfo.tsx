/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import type { FormProps } from "antd";
import { Form, Input, Select, DatePicker, Button } from "antd";

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
      className="mx-10 mt-10"
      initialValues={defaultValues ? defaultValues : " "}
    >
      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-4">
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
              pattern: /^\d{10}$/,
              message: "Please enter a valid 10-digit phone number!",
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
          <Select size="large" placeholder="Select your blood group">
            <Option value="A+">A+</Option>
            <Option value="A-">A-</Option>
            <Option value="B+">B+</Option>
            <Option value="B-">B-</Option>
            <Option value="AB+">AB+</Option>
            <Option value="AB-">AB-</Option>
            <Option value="O+">O+</Option>
            <Option value="O-">O-</Option>
          </Select>
        </Form.Item>
      </div>

      {/* Submit Button */}
      <div className="text-end mt-10 mb-5">
        <Button size="large" type="primary" htmlType="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default PersonalInfo;
