import Link from "next/link";

export default function Hiit() {
  const benefits = [
    "Improves Cardiovascular Health",
    "Boosts heart health and endurance in a shorter time",
    "Burns More Calories",
    "Higher calorie burn during and after the workout due to the 'afterburn effect' (EPOC - Excess Post-Exercise Oxygen Consumption)",
    "Builds Strength and Endurance",
    "Combines strength and cardio elements",
    "Convenient",
    "Can be done without equipment and in small spaces",
    "Enhances Metabolism",
    "May boost metabolism for hours post-workout",
  ];

  return (
    <div className="relative">
      <div className="py-12 flex flex-col gap-y-12 leading-6">
        {/* About Section */}
        <section className="centralize flex flex-col items-center gap-y-4 border-b py-12 border-black">
          <h1 className="header text-xl sm:text-2xl lg:text-3xl">About</h1>
          <p className="text-justify w-full sm:w-3/4 lg:w-2/4 px-4 sm:px-0">
            HIIT (High-Intensity Interval Training) is a form of exercise that
            alternates between short bursts of intense activity and periods of
            lower-intensity recovery or rest. It's designed to maximize
            efficiency by providing a highly effective workout in a shorter time
            compared to traditional steady-state cardio.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="centralize flex flex-col items-center gap-y-4 border-b py-12 border-black">
          <h1 className="header text-xl sm:text-2xl lg:text-3xl">
            Benefits of HIIT:
          </h1>
          <ul className="text-justify w-full sm:w-3/4 lg:w-2/4 list-disc list-inside px-4 sm:px-0">
            {benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Why Try Section */}
        <section className="centralize flex flex-col items-center gap-y-4 py-12">
          <h1 className="header text-xl sm:text-2xl lg:text-3xl">
            Why Should Try HIIT?
          </h1>
          <p className="text-justify w-full sm:w-3/4 lg:w-2/4 px-4 sm:px-0">
            HIIT (High-Intensity Interval Training) is a form of exercise that
            alternates between short bursts of intense activity and periods of
            lower-intensity recovery or rest. It's designed to maximize
            efficiency by providing a highly effective workout in a shorter time
            compared to traditional steady-state cardio.
          </p>
        </section>
      </div>

      {/* Call-to-Action Button */}
      <div className="px-2 sm:px-4 lg:px-0">
        <Link href="/training/pages/hiit">
          <div className="py-4 px-2 league font-semibold text-lg w-full sm:w-auto centralize bg-blue-600 mb-6 shadow-2xl hover:shadow-none pointer text-white text-center">
            VIEW EXERCISES
          </div>
        </Link>
      </div>
    </div>
  );
}
