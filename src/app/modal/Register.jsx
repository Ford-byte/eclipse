import { useState } from "react";
import Google from "@/icons/Google";

export default function Register({ toggleLogin }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const signupHandler = async (username, email, password) => {
    try {
      const response = await axiosInstance.post("/signup", {
        username,
        email,
        password,
      });
      console.log("Signup Response:", response);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signupHandler(user.username, user.email, user.password);
  };
  const InputField = ({ label, type = "text", value, onChange }) => (
    <div className="flex flex-col w-full gap-2">
      <label className="text-sm">{label}:</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-[#D9D9D9D1] w-full py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black transition duration-300"
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
    <div className="z-10">
      <div className="relative flex items-center justify-center">
        <form className="flex flex-col gap-2 p-6 lg:p-12 w-full max-w-md z-10">
          <div className="text-center">
            <div className="league font-semibold tracking-widest text-3xl lg:text-4xl">
              SIGN UP
            </div>
            <span className="text-sm lg:text-base text-gray-300">
              Create an Account
            </span>
          </div>
          <InputField
            label="Username"
            value={user.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
          <InputField
            label="Email"
            type="email"
            value={user.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Password"
              type="password"
              value={user.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <InputField
              label="Confirm Password"
              type="password"
              value={user.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
          </div>
          <div className="pt-4">
            <AuthButton label="Sign Up" />
          </div>
          <GoogleButton text="Sign up with Google" />
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <span>Already have an account?</span>
            <span
              className="text-red-500 hover:underline cursor-pointer"
              onClick={toggleLogin} // Add the toggleLogin action
            >
              Sign In
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
