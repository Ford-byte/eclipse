import Image from "next/image";
import Link from "next/link";

export default function Strength() {
  const workout = [
    {
      image: "/pushup.jpg",
      intensity: "High",
      duration: "60",
      time: "seconds",
      description:
        "A bodyweight exercise that targets the chest, shoulders, and triceps while also engaging the core and lower body for stability.",
      title: "Push-Up",
    },
    {
      image: "/climber.jpg",
      intensity: "High",
      duration: "60",
      time: "seconds",
      description:
        "A full-body cardio exercise that engages the core, legs, and arms, mimicking the motion of climbing to build strength and endurance.",
      title: "Mountain Climber",
    },
    {
      image: "/crunches.jpg",
      intensity: "High",
      duration: "60",
      time: "seconds",
      description:
        "An abdominal exercise that strengthens the core by isolating the upper abs and improving overall core stability.",
      title: "Crunches",
    },
  ];

  return (
    <div className="">
      <div className="relative">
        <div className="relative">
          <Image
            src={`/about.jpg`}
            width={1000}
            height={1000}
            alt="background"
            className="h-[300px] md:h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white text-center text-4xl md:text-7xl font-bold league">
            Hiit Exercise
          </div>
        </div>
      </div>
      <div className="mt-12 league container mx-auto">
        {workout.map((item, index) => (
          <div
            className={`py-8 md:py-12 flex flex-col gap-y-8 md:gap-y-12 ${
              index !== workout.length - 1 ? "border-b border-black" : ""
            }`}
            key={index}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 w-full md:w-1/2">
                <Image
                  src={item.image}
                  width={600}
                  height={400}
                  alt="workout image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-semibold pb-4">
                  {item.title}
                </h1>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Intensity:</span>{" "}
                    {item.intensity}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span>{" "}
                    {item.duration} {item.time}
                  </p>
                </div>
                <p className="mt-4 text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-6 mt-8">
        <Link href={`/training`}>
          <div className="py-3 my-2 px-6 league font-semibold text-lg text-center bg-blue-600 text-white shadow-md hover:bg-blue-700 transition w-full">
            VIEW TRAINING
          </div>
        </Link>
      </div>
    </div>
  );
}
