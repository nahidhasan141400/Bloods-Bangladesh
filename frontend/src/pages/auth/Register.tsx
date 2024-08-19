import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Register = () => {
  const onFinish = (values: any) => {
    console.log(values)
  };
  return (
    <section className="w-full h-screen grid relative grid-cols-1 md:grid-cols-2">
      {/* from */}
      <div className="h-full max-w-xl min-w-[300px] mx-auto">
        <div className="h-full mx-auto flex flex-col justify-center px-3">
          <div className="flex w-full flex-col justify-center items-center">
            <img className="w-[150px]" src="/images/logo/Logo.png" alt="img" />

            <p className="mt-2 ">Login in to Bloods Bangladesh</p>
          </div>
          <div>
            <Form layout="vertical" className="mt-8" onFinish={onFinish}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
                label={<span>Full Name</span>}
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
                label={<span>Email</span>}
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
                label={<span>Password</span>}
              >
                <Input.Password
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
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full overflow-hidden hidden md:block">
        <img
          className="w-full h-full object-cover"
          src="/images/login/donate.jpeg"
          alt="img"
        />
      </div>
    </section>
  );
};

export default Register;
