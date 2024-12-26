"use client";

import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Image from "next/image";
import Close from "@/icons/Close";

export default function Authentication({ onClick }) {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  return (
    <div className="fixed top-0 left-0 w-full h-full md:flex justify-center sm:items-center">
      <div className="relative league text-white">
        <Image
          src="/loginBg.jpg"
          width={1000}
          height={1000}
          alt="background"
          className="fixed top-0 left-0 w-full h-full object-cover"
        />
        <div className="fixed top-0 right-0 z-50 p-4">
          <Close className={`size-6 fill-white`} onClick={onClick} />
        </div>
        <div className="flex justify-center items-center h-screen z-10">
          <div className="relative w-full h-fit bg-black grid md:grid-cols-2 overflow-hidden shadow-lg">
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

            {/* Login or Register Form */}
            <div className="z-10">
              {isLogin ? (
                <Login toggleLogin={toggleLogin} />
              ) : (
                <Register toggleLogin={toggleLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
