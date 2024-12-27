"use client";

import "../(home)/global.css";
import { League_Spartan, Cairo } from "next/font/google";
import validatorStore from "../../../stores/validatorStore";
import { useRouter } from "next/navigation"; // Updated import for Next.js App Router
import { useEffect } from "react";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

export default function RootLayout({ children }) {
  const router = useRouter();
  const accountValidator = validatorStore((state) => state.accountValidator);

  useEffect(() => {
    const isLog = localStorage.getItem("IS_LOGIN");
    if (isLog) {
      const userRole = localStorage.getItem("USER_ROLE");
      accountValidator(userRole, "trainer", router);
    } else {
      return router.push("/");
    }
  }, [accountValidator, router]);

  return (
    <html lang="en" className={`${cairo.className} ${leagueSpartan.className}`}>
      <body className="relative">{children}</body>
    </html>
  );
}
