"use client";

import React,{useState} from "react";
import SocailLogin from "./SocailLogin";
// import { doSocialLogin } from "@/app/actions";/
import { doCredentialsLogin } from "@/app/actions";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error,setError] = useState("");

  const router = useRouter();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const response = await doCredentialsLogin(formData);
      if (!!response?.error) {
        setError(response.error.message);
      } else {
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleFormSubmit}
        className="my-5 flex flex-col items-center border p-3 bg-gray-200 rounded-md"
      >
        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border decoration-gray-500 mx-2 rounded"
          />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border decoration-gray-500 mx-2 rounded"
          />
          <button
            type="submit"
            className="bg-orange-400 rounded flex items-center justify-center mt-4 w-36 "
          >
            Credential Login
          </button>
        </div>
      </form>
      <SocailLogin />
    </>
  );
};

export default Login;
