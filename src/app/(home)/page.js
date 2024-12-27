
"use client";
import About from "@/block/page/About"
import HowTo from "@/block/page/HowTo"
import Footer from "@/menu/Footer"
import Image from "next/image"
import { useState } from "react";
import Authentication from "../modal/Authentication";
import Link from "next/link";
import Coach from "@/block/page/Coach";

export default function Home() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const loginToggler = () => setLoginOpen(!isLoginOpen);

  return (
    <div className="relative">
      <div className="relative w-full">
        <Image
          src="/background.webp"
          width={1000}
          height={700}
          alt="background"
          className=" w-full h-[450px] md:h-[600px] object-cover"
          priority
        />
        <div className="absolute inset-0 flex md:grid grid-cols-2 items-center">
          <div className="col-span-1 flex justify-center px-12 flex-col">
            <h1 className="text-black text-3xl md:text-7xl font-bold">
              Where Fitness
              Becomes Your
              Lifestyle.
            </h1>
            <div className="flex flex-col md:flex-row gap-6 mt-12">
              <Link href={`/trainer`}>
                <div className="custom-button cairo uppercase text-center">Hire a coach</div>
              </Link>
              <div className="uppercase cairo py-2 px-2 bg-white rounded-md shadow-lg font-semibold hover:shadow-none text-center" onClick={() => {
                loginToggler();
              }}>Login</div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <HowTo />
      <Coach />
      <Footer />
      {isLoginOpen && <Authentication onClick={loginToggler} />}
    </div>

  )
}