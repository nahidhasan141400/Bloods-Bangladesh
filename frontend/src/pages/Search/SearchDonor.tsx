import { Button, Card, Form, Select } from "antd";
import UserCard from "./UserCard";

const SearchDonor = () => {
  return (
    <div className="w-full relative container mx-auto">
      <Card>
        <Form layout="vertical">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Form.Item
              name={"country"}
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Please select Your country",
                },
              ]}
            >
              <Select
                size="large"
                options={[
                  {
                    value: "bangladesh",
                    label: (
                      <span className="flex items-center gap-2">
                        {" "}
                        <img
                          src="https://flagcdn.com/48x36/bd.png"
                          className="w-6"
                        />
                        <span>Bangladesh</span>
                      </span>
                    ),
                  },
                  {
                    value: "USA",
                    label: (
                      <span className="flex items-center gap-2">
                        {" "}
                        <img
                          src="https://flagcdn.com/48x36/us.png"
                          className="w-6"
                        />
                        <span>USA</span>
                      </span>
                    ),
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              name={"country"}
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Please select Your country",
                },
              ]}
            >
              <Select
                size="large"
                options={[
                  {
                    value: "bangladesh",
                    label: (
                      <span className="flex items-center gap-2">
                        {" "}
                        <img
                          src="https://flagcdn.com/48x36/bd.png"
                          className="w-6"
                        />
                        <span>Bangladesh</span>
                      </span>
                    ),
                  },
                  {
                    value: "USA",
                    label: (
                      <span className="flex items-center gap-2">
                        {" "}
                        <img
                          src="https://flagcdn.com/48x36/us.png"
                          className="w-6"
                        />
                        <span>USA</span>
                      </span>
                    ),
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              name={"country"}
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Please select Your country",
                },
              ]}
            >
              <Select
                size="large"
                options={[
                  {
                    value: "bangladesh",
                    label: (
                      <span className="flex items-center gap-2">
                        {" "}
                        <img
                          src="https://flagcdn.com/48x36/bd.png"
                          className="w-6"
                        />
                        <span>Bangladesh</span>
                      </span>
                    ),
                  },
                  {
                    value: "USA",
                    label: (
                      <span className="flex items-center gap-2">
                        {" "}
                        <img
                          src="https://flagcdn.com/48x36/us.png"
                          className="w-6"
                        />
                        <span>USA</span>
                      </span>
                    ),
                  },
                ]}
              />
            </Form.Item>
          </div>
          <div className="w-full">
            <Button icon="🔍" block type="primary" size="large">
              Search
            </Button>
          </div>
        </Form>
      </Card>
      <div className="py-5">
        <Card title="Donor Result" loading={false}>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchDonor;
