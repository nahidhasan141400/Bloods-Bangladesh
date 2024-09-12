/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Divider, Form, Input } from "antd";
import { useLoginAdminMutation } from "../../../redux/api/adminApi/AdminApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [loginMutation, loginMutationOpt] = useLoginAdminMutation();
  const Nav = useNavigate();
  // login
  const Login = async (value: any) => {
    if (loginMutationOpt.isLoading) {
      return;
    }
    try {
      const Res = await loginMutation(value);
      if ("error" in Res) {
        return toast.error("Login failed");
      }
      toast.success("Login succeeded");
      Nav("/we/admin/dashboard");
    } catch (error) {
      console.log("🚀 ~ Login ~ error:", error);
    }
  };
  return (
    <div className="w-full flex justify-center min-h-screen items-center">
      <Card>
        <h1 className="p-3 text-center text-xl font-bold">Admin Login</h1>
        <Divider className="bg-red-800" />
        <Form onFinish={Login} layout="vertical">
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
          <Button
            htmlType="submit"
            loading={loginMutationOpt.isLoading}
            type="primary"
            block
          >
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AdminLogin;
