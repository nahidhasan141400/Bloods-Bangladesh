import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {register,handleSubmit} = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
  }
  return (
    <section className="mb-20 mt-10">
      <div className="max-w-md w-full rounded-lg mx-auto text-white p-1 bg-primary ">
        <div className="flex items-center gap-1 w-full">
          <button className="btn  border-none  font-medium  w-[49.5%]">
            Become Donner
          </button>
          <button className="btn bg-transparent border-none text-white font-medium  w-[49.5%]">
            Organization
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-5 p-5 bg-gray-50 border rounded-2xl flex justify-center shadow-xl ">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] my-8 w-full flex flex-col gap-5">
          <div className="flex gap-2 w-full flex-col">
            <label className="text-gray-600 font-medium">Your Email</label>
            <input
            {...register("email",{required: true})}
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-2 w-full flex-col">
            <label className="text-gray-600 font-medium">Your Password</label>
            <input
             {...register("password",{required: true})}
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>

          <div className="flex items-center text-xl font-medium gap-5">
            <div className="w-full h-[2px] bg-primary">

            </div>
            or
            <div className="w-full h-[2px] bg-primary">

            </div>
          </div>

          <div className="flex justify-center">
          <div className="flex items-center gap-2 border bg-white px-10 py-2 shadow-md w-fit rounded-2xl"> 
            <Image
              src={"/images/GoogleIcon.png"}
              width={100}
              height={100}
              className="size-10"
              alt="GoogleIcon"
            />
            <p className="text-xl font-medium text-gray-700">Login with google</p>
          </div>
          </div>

        </form>
      </div>

    </section>
  );
};

export default Login;
