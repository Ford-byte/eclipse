"use client";

import Google from "@/icons/Google";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const InputField = ({ label, type = "text" }) => (
    <div className="flex flex-col w-full gap-2">
      <label className="text-sm">{label}:</label>
      <input
        type={type}
        className="bg-[#D9D9D9D1] w-full py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
    </div>
  );

  const AuthButton = ({ label }) => (
    <input
      type="submit"
      value={label}
      className="bg-[#1056A5] text-white shadow-lg hover:shadow-none w-full py-2 px-2 rounded cursor-pointer transition hover:bg-[#08447c]"
    />
  );

  const GoogleButton = ({ text }) => (
    <div className="flex items-center justify-center gap-2 cursor-pointer">
      <Google className="h-5 w-5" />
      <div className="hover:underline">{text}</div>
    </div>
  );

  return (
    <div className="relative league text-white">
      {/* Background Image */}
      <Image
        src="/loginBg.jpg"
        width={1000}
        height={1000}
        alt="background"
        className="fixed top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex justify-center items-center h-screen z-10">
        <div className="relative w-full h-fit lg:w-3/4 bg-black grid md:grid-cols-2 overflow-hidden shadow-lg">
          <span className="bg-black w-full z-10 h-full absolute bg-opacity-40"></span>

          <Image
            src="/loginBg.jpg"
            width={1000}
            height={1000}
            alt="Login Background Image"
            className="absolute w-full h-full object-cover"
          />

          <div className="z-10 hidden md:flex justify-center">
            <Image
              src="/Logo.webp"
              width={400}
              height={300}
              alt="Logo"
              className="object-cover"
            />
          </div>

          {/* Login Form */}
          {isLogin ? (
            <div className="z-10">
              <div className="relative flex items-center justify-center">
                <div className="flex flex-col gap-6 p-6 lg:p-12 w-full z-10">
                  <div className="text-center">
                    <div className="league font-semibold tracking-widest text-3xl lg:text-4xl">
                      WELCOME
                    </div>
                    <span className="text-sm lg:text-base text-gray-300">
                      Please Sign In
                    </span>
                  </div>
                  <InputField label="Username" />
                  <InputField label="Password" type="password" />
                  <div className="pt-4">
                    <AuthButton label="Sign In" />
                  </div>
                  <GoogleButton text="Sign in with Google" />
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                    <span>Don&apos;t have an account yet?</span>
                    <span
                      className="text-red-500 hover:underline cursor-pointer"
                      onClick={toggleLogin}>
                      Sign Up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="z-10">
              <div className="relative flex items-center justify-center">
                <div className="flex flex-col gap-2 p-6 lg:p-12 w-full max-w-md z-10">
                  <div className="text-center">
                    <div className="league font-semibold tracking-widest text-3xl lg:text-4xl">
                      SIGN UP
                    </div>
                    <span className="text-sm lg:text-base text-gray-300">
                      Create an Account
                    </span>
                  </div>
                  <InputField label="Username" />
                  <InputField label="Email" type="email" />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField label="Password" type="password" />
                    <InputField label="Confirm Password" type="password" />
                  </div>
                  <div className="pt-4">
                    <AuthButton label="Sign Up" />
                  </div>
                  <GoogleButton text="Sign up with Google" />
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                    <span>Already have an account?</span>
                    <span
                      className="text-red-500 hover:underline cursor-pointer"
                      onClick={toggleLogin}>
                      Sign In
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
