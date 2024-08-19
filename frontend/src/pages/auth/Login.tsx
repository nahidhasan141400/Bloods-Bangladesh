import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { LogosGoogleIcon } from "../../components/icons";
import { proxy } from "../../proxy";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Login = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <section className="w-full h-screen grid relative grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full overflow-hidden hidden md:block">
        <img
          className="w-full h-full object-cover"
          src="/images/login/donate.jpeg"
          alt="img"
        />
      </div>

      <div className=" h-full max-w-xl min-w-[300px] mx-auto ">
        <div className="flex w-full flex-col justify-center items-center">
          <img
            className="w-[250px] pb-5 mt-5"
            src="/images/logo/Logo.png"
            alt="img"
          />
          <h1 className="text-3xl font-medium">Save Life</h1>
          <p className="mt-2 ">Login in to Bloods Bangladesh</p>
        </div>
        {/* from start */}
        <div className="w-full relative">
          <Form layout="vertical" className="mt-8" onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
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
            <div className="flex gap-2 flex-col">
              <Button size="large" block type="primary" htmlType="submit">
                Log in
              </Button>
              <a href={proxy + "/google/login"}>
                <Button
                  size="large"
                  block
                  type="primary"
                  htmlType="button"
                  icon={<LogosGoogleIcon />}
                  style={{
                    backgroundColor: "#a35d70",
                  }}
                >
                  Login With Google
                </Button>
              </a>
              <p className="mt-1 ">
                you have no account then{" "}
                <Link to="/auth/register" className="text-blue-300 underline">
                  Register now!
                </Link>
              </p>
            </div>
          </Form>
        </div>
        {/* from end */}
      </div>
    </section>
  );
};

export default Login;
