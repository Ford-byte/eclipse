import Image from "next/image";
import Link from "next/link";
export default function Strength() {
  const workout = [
    {
      image: "/bench.jpg",
      intensity: "High",
      duration: "60",
      time: "seconds",
      description:
        "A compound exercise that targets the chest, shoulders, and triceps, while also engaging the core, back, and lower body ",
      title: "Bench Press",
    },
    {
      image: "/overhead.jpg",
      intensity: "High",
      duration: "60",
      time: "seconds",
      description:
        "The overhead press, also known as the shoulder press, military press, or strict press, is a weight training exercise that strengthens the upper body, particularly the shoulders and triceps.",
      title: "Overhead Press",
    },
    {
      image: "/bicep.jpg",
      intensity: "High",
      duration: "60",
      time: "seconds",
      description:
        "A bicep curl is an exercise that builds muscle and strength in the upper arm. Here are some tips for performing a bicep curl.",
      title: "Bicep Curls",
    },
  ];
  return (
    <div>
      <div className="relative">
        <div className="relative">
          <Image
            src={`/about.jpg`}
            width={1000}
            height={1000}
            alt="background"
            className="h-[500px] w-full"
          />
          <div className="absolute inset-0 flex justify-center items-center text-white text-shadow-lg text-7xl font-bold league">
            Strength exercise
          </div>
        </div>
      </div>
      <div className="relative league">
        <div>
          {workout &&
            workout.map((item, index) => {
              return (
                <div
                  className="py-12 flex flex-col gap-y-12 leading-6"
                  key={index}>
                  <div
                    className={`gap-y-4 py-12 border-black centralize ${
                      index !== workout.length - 1 ? "border-b" : ""
                    }`}>
                    <div className="w-2/4">
                      <div className="grid grid-cols-2">
                        <div className="bg-gray-200 w-full h-[200px]">
                          <Image
                            src={item.image}
                            width={300}
                            height={200}
                            alt="image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <h1 className="header pb-6">{item.title}</h1>
                          <span className="flex gap-4">
                            <p>Intensity:</p>
                            <p>{item.intensity}</p>
                          </span>
                          <span className="flex gap-4">
                            <p>Duration:</p>
                            <p>
                              {item.duration} {item.time}
                            </p>
                          </span>
                        </div>
                      </div>
                      <div className="py-4 league text-center">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="px-2">
        <Link href={`/training`}>
          <div className="py-4 px-2 league font-semibold text-lg w-full centralize bg-blue-600 mb-6 shadow-2xl hover:shadow-none pointer text-white">
            BACK
          </div>
        </Link>
      </div>
    </div>
  );
}
