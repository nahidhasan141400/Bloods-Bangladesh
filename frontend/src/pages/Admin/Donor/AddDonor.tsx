/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, Button, Form, Input, Modal, Select } from "antd";
import {
  bloodsGroups,
  districts,
  divisions,
  upazilas,
} from "../../../data/stepsData";
import { useState } from "react";
import { toast } from "sonner";
import { useAddDonorByAdminMutation } from "../../../redux/api/donorApi/donorApi";

const AddDonor = () => {
  const [Open, setOpen] = useState(false);

  const [form] = Form.useForm();
  const selectedDivision = Form.useWatch("division", form);
  const selectedDistrict = Form.useWatch("district", form);

  const [add, addOpt] = useAddDonorByAdminMutation();
  const Submit = async (value: any) => {
    try {
      if (addOpt.isLoading) {
        return;
      }

      const res = await add(value);

      if ("error" in res) {
        toast.error("Something is Wrong !");
        return;
      }

      toast.success("Successfully added ");
      form.setFieldValue("name", "");
      form.setFieldValue("phone", "");
      form.setFieldValue("blood_group", "");
    } catch (error) {
      console.log("🚀 ~ Submit ~ error:", error);
    }
  };
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Add new Donor
      </Button>
      <Modal
        onCancel={() => {
          setOpen(false);
        }}
        open={Open}
        title="Add new Donor"
        footer=""
      >
        {addOpt.isLoading && (
          <Alert
            type="error"
            showIcon
            closable
            // @ts-expect-error skip
            message={addOpt.error?.data?.message || "Something is Wrong !"}
          />
        )}
        <Form onFinish={Submit} form={form} layout="vertical">
          <Form.Item
            name={"name"}
            label="Donor Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Donor Phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
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
          <Form.Item label="Address" name="address">
            <Input.TextArea />
          </Form.Item>

          {/*  */}
          {/* Country */}
          <Form.Item
            label="Country"
            name="country"
            initialValue="Bangladesh"
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select
              size="large"
              options={[
                {
                  label: "Bangladesh",
                  value: "bangladesh",
                },
              ]}
            />
          </Form.Item>
          {/* Division */}
          <Form.Item
            label="Division"
            name="division"
            rules={[
              { required: true, message: "Please select your division!" },
            ]}
          >
            <Select
              showSearch
              size="large"
              placeholder="Select your division"
              options={divisions}
            />
          </Form.Item>

          {/* District */}
          <Form.Item
            label="District"
            name="district"
            rules={[
              { required: true, message: "Please select your district!" },
            ]}
          >
            <Select
              showSearch
              size="large"
              disabled={!selectedDivision}
              placeholder="Select your district"
              options={
                selectedDivision &&
                // @ts-expect-error skip
                districts[selectedDivision]?.map((district: any) => ({
                  value: district,
                  label: district,
                }))
              }
            />
          </Form.Item>

          {/* upazila */}
          <Form.Item
            label="Upazila"
            name="upazila"
            rules={[{ required: true, message: "Please select your upazila!" }]}
          >
            <Select
              showSearch
              size="large"
              placeholder="Select your upazila"
              disabled={!selectedDistrict}
              options={
                selectedDistrict &&
                // @ts-expect-error skip
                upazilas[selectedDistrict]?.map((district: any) => ({
                  value: district,
                  label: district,
                }))
              }
            />
          </Form.Item>
          {/*  */}
          <div className={"w-full flex justify-end gap-2"}>
            <Button loading={addOpt.isLoading} type="dashed" htmlType="reset">
              Cancel
            </Button>
            <Button loading={addOpt.isLoading} type="primary" htmlType="submit">
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddDonor;
