import { Alert, Button, Card, Input } from "antd";
import { useLocation } from "react-router-dom";
import { useEmailVerificationMutation } from "../../redux/api/authApi/authApi";
import { toast } from "sonner";
import { OTPProps } from "antd/es/input/OTP";
import { useState } from "react";

const EmailVerification: React.FC = () => {
  const [mutation, { isLoading, isError, error }] =
    useEmailVerificationMutation();
  const [otp, setOpt] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");

  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
    setOpt(text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  const handleSubmitOtp = async () => {
    const data = {
      otp: otp,
      email: email,
    };
    console.log(data);

    try {
      const res = await mutation(data).unwrap();
      if ("error" in res) {
        console.log(res);
        toast.error("Failed to verify email");
        return; // stop the function if error occurs
      }
      toast.success("Email verified successfully");
      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="shadow-lg p-5">
        <h1 className="text-3xl font-semibold mb-2">Email Verification</h1>
        <p className="text-gray-600 mt-1 mb-5">
          Enter the code sent to your email
        </p>
        {isError && (
          <Alert
            showIcon
            type="error"
            // @ts-expect-error skip
            message={error?.data?.message || "Something is wrong !"}
          />
        )}
        <div className="flex justify-center mt-3">
          <Input.OTP
            size="large"
            length={5}
            formatter={(str) => str.toUpperCase()}
            {...sharedProps}
          />
        </div>
        <Button
          onClick={handleSubmitOtp}
          loading={isLoading}
          type="primary"
          block
          size="large"
          className="mt-5"
        >
          Verify
        </Button>
      </Card>
    </div>
  );
};

export default EmailVerification;
