import Image from "next/image";

export default function Page() {
  return (
    <div className="relative">
      {/* Header Section */}
      <div className="relative h-[50vh] md:h-[75vh]">
        <Image
          src="/about.jpg"
          width={1000}
          height={1000}
          alt="About Us banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl md:text-7xl font-bold bg-black bg-opacity-40">
          ABOUT US
        </div>
      </div>

      {/* Content Section */}
      <div className="h-fit bg-gradient-to-b from-[#517AD3E0] to-black py-12 flex flex-col gap-y-12">
        <div className="flex justify-center text-center px-4">
          <h1 className="league font-bold text-3xl md:text-4xl text-white text-shadow-md">
            ECLIPSE FITNESS GYM
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 md:px-12 gap-4 py-5">
          {/* Mission Section */}
          <div className="col-span-1 lg:col-span-2 text-left">
            <h1 className="text-[#200C7A] league font-bold text-3xl md:text-5xl mb-4">
              OUR MISSION
            </h1>
            <p className="text-justify text-base md:text-lg tracking-wide text-white">
              To empower individuals to achieve their fitness goals by providing
              an accessible, engaging, and supportive online platform that
              enhances their fitness journey. The website will promote a healthy
              lifestyle, foster a sense of community, and simplify the process
              of staying active and informed.
            </p>
          </div>
          <div className="bg-white h-[300px] md:h-[400px] md:col-start-4">
            <Image
              src="/barbel.jpg"
              width={300}
              height={300}
              alt="Barbell"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>

          {/* Vision Section */}
          <div className="col-span-1 lg:col-span-2 text-left">
            <h1 className="text-[#200C7A] league font-bold text-3xl md:text-5xl mb-4">
              OUR VISION
            </h1>
            <p className="text-justify text-base md:text-lg tracking-wide text-white">
              To become a leading digital fitness platform that bridges the gap
              between physical and virtual fitness services, inspiring a
              healthier and happier community. The website will reflect the
              gym's commitment to innovation, inclusivity, and excellence in
              fitness and wellness.
            </p>
          </div>
          <div className="bg-white h-[300px] md:h-[400px]">
            <Image
              src="/run.png"
              width={300}
              height={300}
              alt="Running person"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
