"use client";

import axiosInstance from "@/lib/axios";
import Image from "next/image";
import { useState } from "react";
import Login from "../../modal/Login";
import Register from "../../modal/Register";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

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
            <Login toggleLogin={toggleLogin} />
          ) : (
            <Register toggleLogin={toggleLogin} />
          )}
        </div>
      </div>
    </div>
  );
}
