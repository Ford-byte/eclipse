import About from "@/block/page/About"
import HowTo from "@/block/page/HowTo"
import Footer from "@/menu/Footer"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/background.webp"
          width={2000}
          height={1000}
          alt="background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 grid grid-cols-2 items-center">
          <div className="col-span-1 flex justify-center px-12 flex-col">
            <h1 className="text-black text-7xl font-bold">
              Where Fitness
              Becomes Your
              Lifestyle.
            </h1>
            <div className="flex gap-6 mt-12">
              <div className="custom-button cairo uppercase">Hire a coach</div>
              <div className="uppercase cairo py-2 px-2 bg-white rounded-md shadow-lg font-semibold hover:shadow-none">TRACK MARCOS</div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <HowTo />
      <Footer />
    </div>

  )
}