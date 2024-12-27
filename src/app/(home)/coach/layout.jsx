import Footer from "@/menu/Footer";
import Header from "@/menu/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="relative">{children}</div>
      <Footer/>
    </>
  );
}
