"use client";

import coachJSON from "@/app/static/coach.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams from next/navigation

export default function Page() {
  const { id } = useParams(); // Use the useParams hook to get the 'id'
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Search for the user object based on the 'id' (fullname)
    const foundUser = coachJSON.find((item) => item.fullname === id);
    setUser(foundUser);
  }, [id]);

  // Function to capitalize the first letter of a string
  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="relative">
      <div className="h-[400px] w-full">
        <Image
          src={`/about.jpg`}
          width={1000}
          height={500}
          alt="background"
          className="w-full object-cover h-full"
        />
      </div>

      {console.log(user)}

      {user ? (
        <div className="z-10 text-center flex flex-col items-center -translate-y-[20%]">
          <div className="flex justify-center">
            <Image
              src={user.image || "/default-avatar.jpg"} // Fallback image in case the user has no image
              width={350}
              height={350}
              alt={user.fullname}
              className="object-cover rounded-full w-[350px] h-[350px] mb-12"
            />
          </div>
          <div className="container border py-4 border-black shadow-md gap-y-4 flex flex-col">
            <h2 className="font-semibold text-5xl pb-4">{user.fullname}</h2>
            <div className="gap-4 columnize items-center">
              <div className="columnize gap-2">
                <span className="text-2xl md:text-3xl font-bold text-center header py-4">
                  Experience and Expertise
                </span>
                <p className="text-justify w-full max-w-2xl px-4 md:px-0">
                  {user.experience || "No experience details available."}
                </p>
              </div>
              <div className="columnize gap-2">
                <span className="text-2xl md:text-3xl font-bold text-center header py-4">
                  Specialized Areas
                </span>
                <ul className="text-justify w-full px-4 md:px-0 list-disc list-inside">
                  {Array.isArray(user.specialty) &&
                  user.specialty.length > 0 ? (
                    user.specialty.map((item, index) => (
                      <li key={index}>{item}.</li>
                    ))
                  ) : (
                    <li>No specialized areas listed.</li>
                  )}
                </ul>
              </div>
              <div className="columnize gap-2">
                <span className="text-2xl md:text-3xl font-bold text-center header py-4">
                  Why Train with {capitalize(user.fullname)}?
                </span>
                <p className="text-justify w-full max-w-2xl px-4 md:px-0">
                  {user.question || "No details available."}
                </p>
              </div>
              <div className="font-semibold text-md py-4">{user.motto}</div>
            </div>
          </div>
        </div>
      ) : (
        <p>Coach not found.</p>
      )}
    </div>
  );
}
