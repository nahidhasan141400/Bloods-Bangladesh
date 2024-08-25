/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Form, FormProps, Input, message, Select } from "antd";
import { districts, divisions, upazilas } from "../../../../../data/stepsData";
import { AddDonorFromI } from "../../../../../Interface/Interface";

const { Option } = Select;

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

  const [form] = Form.useForm();

  const [location, setLocation] = useState<any>({
    latitude: null,
    longitude: null,
  });

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          message.success("Location fetched successfully!");
        },
        (error) => {
          message.error(error.message);
        }
      );
    } else {
      message.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      form.setFieldsValue({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    }
  }, [location, form]);

  const handleDivisionChange = (value: string) => {
    setSelectedDivision(value);
    setSelectedDistrict(undefined);
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
  };

  const onFinish: FormProps<any>["onFinish"] = (values) => {
    setData({
      ...values,
      ...location,
    });
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Form
      form={form}
      initialValues={defaultValues ? defaultValues : " "}
      layout="vertical"
      onFinish={onFinish}
      className="m-2 md:mx-10  md:mt-10"
    >
      {/* Address line */}
      <Form.Item<AddDonorFromI>
        label="Address line"
        name="address"
        rules={[{ required: true, message: "Please enter your address!" }]}
      >
        <Input size="large" placeholder="Enter your address" />
      </Form.Item>

      <div className="grid md:grid-cols-2 md:gap-4">
        {/* Country */}
        <Form.Item<AddDonorFromI>
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
        <Form.Item<AddDonorFromI>
          label="Division"
          name="division"
          rules={[{ required: true, message: "Please select your division!" }]}
        >
          <Select
            showSearch
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
        <Form.Item<AddDonorFromI>
          label="District"
          name="district"
          rules={[{ required: true, message: "Please select your district!" }]}
        >
          <Select
            showSearch
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

        {/* upazila */}
        <Form.Item<AddDonorFromI>
          label="Upazila"
          name="upazila"
          rules={[{ required: true, message: "Please select your upazila!" }]}
        >
          <Select
            showSearch
            size="large"
            placeholder="Select your upazila"
            disabled={!selectedDistrict}
          >
            {selectedDistrict &&
              //@ts-expect-error skip if division
              upazilas[selectedDistrict]?.map((upazila) => (
                <Option key={upazila} value={upazila}>
                  {upazila}
                </Option>
              ))}
          </Select>
        </Form.Item>
      </div>
      {/* Get Location Button */}
      <Button type="dashed" size="large" icon="🗺️" onClick={handleGetLocation}>
        Share Your Current Location
      </Button>
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
