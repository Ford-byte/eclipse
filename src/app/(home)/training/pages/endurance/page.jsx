import Image from "next/image";
import Link from "next/link";
import workout from "@/app/static/enduranceWorkout.json";
export default function Endurance() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={`/about.jpg`}
          width={1000}
          height={1000}
          alt="background"
          className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center text-white text-shadow-lg text-4xl sm:text-5xl md:text-7xl font-bold league">
          Endurance Exercise
        </div>
      </div>

      {/* Workout Cards */}
      <div className="relative league mt-12 sm:px-8 md:px-12 lg:px-20">
        {workout.map((item, index) => (
          <div
            key={index}
            className={`py-8 flex flex-col gap-y-6 ${
              index !== workout.length - 1 ? "border-b border-black" : ""
            }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-200 w-full h-[200px] sm:h-[250px] md:h-[300px]">
                <Image
                  src={item.image}
                  width={300}
                  height={200}
                  alt="Workout"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-start px-4 md:px-0">
                <h1 className="header text-xl sm:text-2xl md:text-3xl pb-4">
                  {item.title}
                </h1>
                <div className="text-base sm:text-lg md:text-xl">
                  <p className="flex gap-2">
                    <span className="font-semibold">Intensity:</span>{" "}
                    {item.intensity}
                  </p>
                  <p className="flex gap-2">
                    <span className="font-semibold">Duration:</span>{" "}
                    {item.duration} {item.time}
                  </p>
                </div>
                <p className="py-4 text-sm sm:text-base text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="mx-6 mt-8">
        <Link href={`/training`}>
          <div className="py-3 mb-12 px-6 league font-semibold text-lg text-center bg-blue-600 text-white shadow-md hover:bg-blue-700 transition w-full">
            VIEW TRAINING
          </div>
        </Link>
      </div>
    </div>
  );
}
