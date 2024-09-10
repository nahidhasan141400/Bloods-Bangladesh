import { Button, Card, Divider, Form, Input } from "antd";

const AdminLogin = () => {
  return (
    <div className="w-full flex justify-center min-h-screen items-center">
      <Card>
        <h1 className="p-3 text-center text-xl font-bold">Admin Login</h1>
        <Divider className="bg-red-800" />
        <Form layout="vertical">
          <Form.Item
            name={"username"}
            label="Username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" block>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AdminLogin;
