"use client";
import Authentication from "@/app/modal/authentication";
import Close from "@/icons/Close";
import Menu from "@/icons/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    setUserRole(localStorage.getItem("USER_ROLE"));
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const loginToggler = () => setLoginOpen(!isLoginOpen);

  return (
    <div className="py-4 px-4 primary fixed top-0 w-full z-20 text-white">
      <div className="flex justify-between">
        <div className="bg-transparent w-[50px] h-[50px]">
          <Link href={`/`}>
            <Image
              src={`/logo.webp`}
              width={50}
              height={50}
              alt="logo"
              aria-label="logo"
              className="h-[50px] w-[50px]"
            />
          </Link>
        </div>
        <div className="flex md:hidden items-center px-4">
          <Menu className="size-6 stroke-white" onClick={toggleMenu} />
        </div>
        {menuOpen && (
          <div className="fixed top-0 inset-0 w-full h-full bg-blue-600 flex items-center justify-center">
            <div
              className="fixed top-0 right-0 m-2 p-2 rounded shadow-lg hover:shadow-none border"
              onClick={toggleMenu}>
              <Close className="size-4 stroke-white" onClick={toggleMenu} />
            </div>
            <div className="flex flex-col gap-4 font-bold text-2xl cario uppercase text-center">
              <Link href={`/`}>
                <div onClick={toggleMenu}>Home</div>
              </Link>
              <Link href={`/about`}>
                <div onClick={toggleMenu}>About</div>
              </Link>
              <Link href={`/training`}>
                <div onClick={toggleMenu}>Training</div>
              </Link>
              {!userRole && (
                <span
                  className="py-2 rounded-md shadow-lg hover:shadow-none px-3 bg-gradient-to-r from-[#F45666] to-[#9352F4] cairo"
                  onClick={loginToggler}>
                  Login
                </span>
              )}
            </div>
          </div>
        )}
        <div className="hidden md:flex items-center gap-12 px-4">
          <Link href={`/`}>
            <div>Home</div>
          </Link>
          <Link href={`/about`}>
            <div>About</div>
          </Link>
          <Link href={`/training`}>
            <div>Training</div>
          </Link>
          {!userRole && (
            <div
              className="py-2 rounded-md shadow-lg hover:shadow-none px-3 bg-gradient-to-r from-[#F45666] to-[#9352F4] cairo"
              onClick={loginToggler}>
              LOG IN
            </div>
          )}
        </div>
      </div>
      {isLoginOpen && <Authentication onClick={loginToggler} />}
    </div>
  );
}
