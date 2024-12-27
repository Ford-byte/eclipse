"use client";

import coachJSON from "@/app/static/coach.json";
import { useEffect, useState } from "react";
import { use } from "react"; // Import use from React

export default function Page({ params }) {
  const { id } = use(params);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const foundUser = coachJSON.find((item) => item.fullname === id);
    setUser(foundUser);
  }, [id]); 

  return (
    <div className="relative h-screen bg-gray-200 centralize items-center">
      {user ? (
        <div>
          <h2>{user.fullname}</h2>
          <p>{user.description}</p>
        </div>
      ) : (
        <p>Coach not found.</p>
      )}
    </div>
  );
}
