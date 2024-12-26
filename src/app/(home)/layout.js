import "./global.css";
import Header from "@/menu/Header";
import { League_Spartan, Cairo } from 'next/font/google';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const cairo = Cairo({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
});

export default function RootLayout({ children }) {
  const userRole = typeof window !== "undefined" ? localStorage.getItem("USER_ROLE") : null;

  let layoutContent;
  if (userRole === "admin") {
    layoutContent = <div className="admin-layout">{children}</div>;
  } else if (userRole === "member") {
    layoutContent = <div className="member-layout">{children}</div>;
  } else {
    layoutContent = <div className="default-layout">{children}</div>;
  }

  return (
    <html lang="en" className={`${cairo.className} ${leagueSpartan.className}`}>
      <body className="relative">
        <Header />
        {layoutContent}
      </body>
    </html>
  );
}
