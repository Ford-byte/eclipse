import Image from "next/image";

export default function page() {
  return (
    <div className="relative">
      <div>
        <div className="relative h-[75vh]">
          <Image
            src={`/about.jpg`}
            width={1000}
            height={1000}
            alt="about"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white text-7xl league">
            ABOUT US
          </div>
        </div>
      </div>
      <div className="h-fit bg-gradient-to-b from-[#517AD3E0] to-black py-12 flex flex-col gap-y-12">
        <div className="flex justify-center">
          <h1 className="league font-bold text-4xl text-white text-shadow-md">
            ECLIPSE FITNESS GYM
          </h1>
        </div>
        <div className="grid grid-cols-4 px-12 gap-4 shadow-lg py-5">
          <div className="col-span-2 text-left">
            <h1 className="text-[#200C7A] league font-bold text-5xl">
              OUR MISSION
            </h1>
            <p className="text-justify text-lg tracking-widest text-white">
              To empower individuals to achieve their fitness goals by providing
              an accessible, engaging, and supportive online platform that
              enhances their fitness journey. The website will promote a healthy
              lifestyle, foster a sense of community, and simplify the process
              of staying active and informed.
            </p>
          </div>
          <div className="bg-white col-span-1 col-start-4 h-[400px]">
            <Image
              src={`/barbel.jpg`}
              width={300}
              height={300}
              alt="barbel"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="col-span-2 text-left">
            <h1 className="text-[#200C7A] league font-bold text-5xl">
              OUR VISION
            </h1>
            <p className="text-justify text-lg tracking-widest text-white">
              To become a leading digital fitness platform that bridges the gap
              between physical and virtual fitness services, inspiring a
              healthier and happier community. The website will reflect the
              gym's commitment to innovation, inclusivity, and excellence in
              fitness and wellness.
            </p>
          </div>
          <div className="bg-white col-span-1 col-start-3 h-[400px]">
            <Image
              src={`/run.png`}
              width={300}
              height={300}
              alt="barbel"
              className="h-full w-full object-cover  shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
