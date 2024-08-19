import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Register = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <section className="bg-dark_primary flex justify-between h-screen text-white">
      <div className="flex-1 h-[90%] mt-10">
        <div className="max-w-md h-full mx-auto flex flex-col justify-between px-3">
          <div className="flex">
            <img className="w-[30%]" src="/images/logo/Logo.png" alt="img" />
          </div>
          <div>
            <h1 className="text-3xl font-medium">Hi there, ....</h1>
            <p className="text-gray-300 mt-2 text-xl">
              Get Started with Registration
            </p>
            <Form layout="vertical" className="mt-8" onFinish={onFinish}>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Please input your name!" },
                ]}
                label={<span style={{ color: "white" }}>Full Name</span>}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Full Name"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
                label={<span style={{ color: "white" }}>Email</span>}
              >
                <Input
                  size="large"
                  prefix={<MailOutlined />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
                label={<span style={{ color: "white" }}>Password</span>}
              >
                <Input
                  size="large"
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button size="large" block type="primary" htmlType="submit">
                  Sign up
                </Button>
                <p className="mt-1 text-gray-400">
                  you have account then{" "}
                  <Link to="/auth/login" className="text-blue-300 underline">
                    Login now!
                  </Link>
                </p>
              </Form.Item>
            </Form>
          </div>
          <p className="text-gray-400 text-center">@mafuz copyright</p>
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <img
          className="w-full opacity-65 h-full object-cover"
          src="/images/login/donate.jpeg"
          alt="img"
        />
      </div>
    </section>
  );
};

export default Register;
