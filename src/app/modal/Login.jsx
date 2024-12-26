"use client";

import { useState } from "react";
import Google from "@/icons/Google";
import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";

export default function Login({ toggleLogin }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginHandler = async (username, password) => {
    try {
      const response = await axiosInstance.post(`/user/signin`, {
        username: username,
        password: password,
      });
      console.log("Login Response:", response?.data);

      Cookies.set("token", response?.data?.token, {
        expires: 1,
        secure: false,
        sameSite: "Strict",
      });

      localStorage.setItem("USER_ROLE", response?.data?.role);
      localStorage.setItem("IS_LOGIN", true);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await loginHandler(user.username, user.password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const AuthButton = ({ label }) => (
    <input
      type="submit"
      value={label}
      className={`bg-[#1056A5] text-white shadow-lg hover:shadow-none w-full py-2 px-2 rounded cursor-pointer transition hover:bg-[#08447c] ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={loading}
    />
  );

  const GoogleButton = ({ text }) => (
    <div
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={() => console.log("Google Sign-In clicked")}>
      <Google className="h-5 w-5" />
      <div className="hover:underline">{text}</div>
    </div>
  );

  return (
    <div className="z-10">
      <div className="relative flex items-center justify-center">
        <form
          onSubmit={handleLoginSubmit}
          className="flex flex-col gap-6 p-6 lg:p-12 w-full z-10">
          <div className="text-center">
            <div className="league font-semibold tracking-widest text-3xl lg:text-4xl">
              WELCOME
            </div>
            <span className="text-sm lg:text-base text-gray-300">
              Please Sign In
            </span>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="username" className="text-sm">
              Username:
            </label>
            <input
              type="text"
              id="username"
              aria-label="Enter your username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              name="username"
              className="bg-[#D9D9D9D1] w-full py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black transition duration-300"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="password" className="text-sm">
              Password:
            </label>
            <input
              type="password"
              id="password"
              aria-label="Enter your password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              name="password"
              className="bg-[#D9D9D9D1] w-full py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black transition duration-300"
            />
          </div>
          <div className="pt-4">
            <AuthButton label={loading ? "Signing In..." : "Sign In"} />
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
        </form>
      </div>
    </div>
  );
}
