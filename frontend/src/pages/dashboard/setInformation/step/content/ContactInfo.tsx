/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Form, FormProps, Input, message, Select } from "antd";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
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

  const [location, setLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({
    latitude: defaultValues ? defaultValues?.latitude : null,
    longitude: defaultValues ? defaultValues?.longitude : null,
  });


  const position: [number, number] =
    location.latitude && location.longitude
      ? [location.latitude, location.longitude]
      : [51.505, -0.09];

  const UpdateMapView = ({ coords }: { coords: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(coords, 13);
    }, [coords, map]);
    return null;
  };

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

      <Button
        type="default"
        onClick={handleGetLocation}
        className="w-fit"
      >
        Get Location
      </Button>

      {/* Map Container */}
      <div className="w-full h-[400px] relative mt-5 overflow-hidden border">
        <MapContainer
          className="border"
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Your location</Popup>
          </Marker>
          <UpdateMapView coords={position} />
        </MapContainer>
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
