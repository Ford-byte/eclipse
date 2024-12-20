"use client";

import ChevronDown from "@/icons/ChevronDown";
import Image from "next/image";
import { useState } from "react";
import Endurance from "./block/Endurance";
import Hiit from "./block/Hiit";
import Strength from "./block/Strength";

export default function Page() {
  const [selected, isSelected] = useState("HIIT");

  const toggle = (e) => {
    isSelected(e);
  };

  return (
    <div className="relative">
      {/* Background Image Section */}
      <div className="relative">
        <Image
          src={`/training.jpg`}
          width={2000}
          height={2000}
          alt="background-image"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center text-center text-white text-4xl sm:text-5xl md:text-7xl font-bold league">
          {selected} TRAINING
        </div>
      </div>

      {/* Tabs Section */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { label: "HIIT", component: Hiit },
          { label: "STRENGTH", component: Strength },
          { label: "ENDURANCE", component: Endurance },
        ].map((item) => (
          <div
            key={item.label}
            className={`border p-4 border-black shadow-md flex justify-between items-center cursor-pointer ${
              selected === item.label ? "bg-gray-200" : ""
            }`}
            onClick={() => toggle(item.label)}
          >
            <span className="flex justify-center w-full font-bold league text-lg md:text-xl">
              {item.label}
            </span>
            <span className="flex items-center">
              <ChevronDown className="size-6" />
            </span>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {selected === "HIIT" ? (
          <Hiit />
        ) : selected === "STRENGTH" ? (
          <Strength />
        ) : selected === "ENDURANCE" ? (
          <Endurance />
        ) : null}
      </div>
    </div>
  );
}
