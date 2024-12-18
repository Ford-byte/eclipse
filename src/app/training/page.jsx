"use client";

import ChevronDown from "@/icons/ChevronDown";
import Image from "next/image";
import { useState } from "react";
import Endurance from "./block/Endurance";
import Hiit from "./block/Hiit";
import Strength from "./block/Strength";

export default function page() {
  const [selected, isSelected] = useState("HIIT");

  const toggle = (e) => {
    isSelected(e);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Image
          src={`/training.jpg`}
          width={2000}
          height={2000}
          alt="background-image"
          className="w-full h-[500px] object-fill"
        />
        <div className="absolute inset-0 grid grid-cols-4 text-black text-7xl league">
          <div className="col-start-3 flex justify-center items-center text-center">
            {selected} TRAINING
          </div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-3 gap-4">
        <div
          className="border p-4 border-black shadow-md flex justify-between pointer"
          onClick={() => {
            toggle("HIIT");
          }}>
          <span
            className="flex justify-center w-full font-bold league text-xl"
            onClick={() => {
              toggle("HIIT");
            }}>
            HIIT
          </span>
          <span className="flex items-center">
            <ChevronDown
              className={`size-6 pointer`}
              onClick={() => {
                toggle("HIIT");
              }}
            />
          </span>
        </div>
        <div
          className="border p-4 border-black shadow-md flex justify-between pointer"
          onClick={() => {
            toggle("STRENGTH");
          }}>
          <span
            className="flex justify-center w-full font-bold league text-xl"
            onClick={() => {
              toggle("STRENGTH");
            }}>
            STRENGTH
          </span>
          <span className="flex items-center">
            <ChevronDown
              className={`size-6 pointer`}
              onClick={() => {
                toggle("STRENGTH");
              }}
            />
          </span>
        </div>
        <div
          className="border p-4 border-black shadow-md flex justify-between pointer"
          onClick={() => {
            toggle("ENDURANCE");
          }}>
          <span
            className="flex justify-center w-full font-bold league text-xl"
            onClick={() => {
              toggle("ENDURANCE");
            }}>
            ENDURANCE
          </span>
          <span className="flex items-center">
            <ChevronDown
              className={`size-6 pointer`}
              onClick={() => {
                toggle("ENDURANCE");
              }}
            />
          </span>
        </div>
      </div>
      <div>
        {selected == "HIIT" ? (
          <Hiit />
        ) : selected == "STRENGTH" ? (
          <Strength />
        ) : selected == "ENDURANCE" ? (
          <Endurance />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
