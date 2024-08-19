import { Button } from "antd";
import React, { useRef, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { useEmailVerificationMutation } from "../../redux/api/authApi/authApi";
import { toast } from "sonner";

const EmailVerification: React.FC = () => {
  const [mutation, { isLoading }] = useEmailVerificationMutation();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  console.log(email);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const { value } = e.currentTarget;

    // Move to next input if there's a value
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Move to previous input on backspace if there's no value
    if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const code = inputRefs.current.map((input) => input?.value).join("");
    const data = {
      opt: code,
      email: email,
    };

    try {
      const res = await mutation(data).unwrap();
      if ("error" in res) {
        console.log(res);
        toast.error("Failed to verify email");
        return; // stop the function if error occurs
      }
      toast.success("Email verified successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="h-screen bg-dark_primary flex justify-center items-center">
      <div className="max-w-md p-10 text-white bg-gray-800 ring-2 text-center rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold mb-2">Email Verification</h1>
        <p className="text-gray-200 mt-1 mb-5">
          Enter the code sent to your email
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-5 gap-2 text-black mb-5">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-xl font-bold border border-gray-500 rounded-lg"
                  ref={(el) => (inputRefs.current[index] = el)}
                  onInput={(e) => handleInput(e, index)}
                />
              ))}
          </div>
          <Button
            loading={isLoading}
            type="primary"
            block
            size="large"
            htmlType="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium"
          >
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
