import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/api/authApi/authApi";
import { toast } from "sonner";
import { proxy } from "../../proxy";
import { LogosGoogleIcon } from "../../components/icons";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Register = () => {
  const navigate = useNavigate();
  const [mutation, { isLoading }] = useRegisterUserMutation();
  const onFinish = async (values: any) => {
    try {
      const res = await mutation(values).unwrap();
      if ("error" in res) {
        console.log(res);
        toast.error("Failed to register");
        return;
      }
      console.log(res);
      toast.success("Registration successful");
      navigate(`/auth/email-verification?email=${res?.email}`);
    } catch (err) {
      console.log(err);
      toast.error("Failed to register");
    }
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
                <Button
                  loading={isLoading}
                  size="large"
                  block
                  type="primary"
                  htmlType="submit"
                >
                  {isLoading ? "Loading..." : "Sign up"}
                </Button>
                <a href={proxy + "/google/login"}>
                  <Button
                    className="mt-3"
                    size="large"
                    block
                    type="primary"
                    htmlType="button"
                    icon={<LogosGoogleIcon />}
                    style={{
                      backgroundColor: "#fff",
                      color: "#000",
                      borderColor: "#cdcdcd",
                    }}
                  >
                    Login With Google
                  </Button>
                </a>
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
