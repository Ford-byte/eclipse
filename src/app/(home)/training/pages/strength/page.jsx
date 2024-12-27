import Image from "next/image";
import Link from "next/link";
import workout from "@/app/static/strengthWorkout.json";
export default function Strength() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full">
        <Image
          src={`/about.jpg`}
          width={1000}
          height={1000}
          alt="background"
          className="h-[300px] md:h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center text-white text-center text-shadow-lg text-3xl md:text-5xl lg:text-7xl font-bold league">
          Strength Exercise
        </div>
      </div>

      {/* Workout Section */}
      <div className="relative league w-full max-w-7xl  mt-12 sm:px-6 lg:px-8">
        {workout.map((item, index) => (
          <div
            className={`py-6 md:py-12 flex flex-col gap-y-6 md:gap-y-12 ${
              index !== workout.length - 1 ? "border-b border-black" : ""
            }`}
            key={index}>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Image */}
              <div className="bg-gray-200 w-full md:w-1/2 h-[200px] sm:h-[300px] lg:h-[400px]">
                <Image
                  src={item.image}
                  width={300}
                  height={200}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Details */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                <h1 className="header pb-4 md:pb-6 text-xl md:text-2xl lg:text-3xl">
                  {item.title}
                </h1>
                <span className="flex gap-4 text-lg md:text-xl">
                  <p className="font-semibold">Intensity:</p>
                  <p>{item.intensity}</p>
                </span>
                <span className="flex gap-4 text-lg md:text-xl">
                  <p className="font-semibold">Duration:</p>
                  <p>
                    {item.duration} {item.time}
                  </p>
                </span>
                <p className="py-4 text-sm md:text-base lg:text-lg text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="px-6 w-full">
        <Link href={`/training`}>
          <div className="w-full py-4 px-2 league font-semibold text-lg centralize bg-blue-600 mb-12 shadow-2xl hover:shadow-none pointer text-white">
            VIEW TRAINING
          </div>
        </Link>
      </div>
    </div>
  );
}
