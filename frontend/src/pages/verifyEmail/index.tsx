import React, { useRef, FormEvent } from "react";

const VerifyEmail: React.FC = () => {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const code = inputRefs.current.map(input => input?.value).join('');
    console.log("Entered code:", code);
    // Handle the submission logic here
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="max-w-md p-10 bg-primary text-white text-center rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold">Email Verify</h1>
        <p className="text-gray-200 mt-1 mb-5">
          Enter the code sent to your email
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid text-black grid-cols-5 gap-1">
            {Array(5).fill(0).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="input input-bordered w-full text-center"
                //@ts-expect-error skip
                ref={(el) => (inputRefs.current[index] = el)}
                onInput={(e) => handleInput(e, index)}
              />
            ))}
          </div>
          <button type="submit" className="btn w-full mt-3 text-xl bg-secondary text-white border-none shadow-xl">
            Verify
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default VerifyEmail;
