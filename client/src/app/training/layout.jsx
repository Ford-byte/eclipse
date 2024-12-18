import Footer from "@/menu/Footer";
import Header from "@/menu/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
      <Footer/>
    </>
  );
}
