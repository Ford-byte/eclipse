import Link from "next/link";
import benefits from "@/app/static/strengthBenefits.json"
export default function Strength() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="py-12 flex flex-col gap-y-12 leading-6">
        {/* About Section */}
        <div className="flex flex-col items-center gap-y-4 border-b py-12 border-black">
          <h1 className="text-2xl md:text-3xl font-bold text-center header">About</h1>
          <p className="text-justify w-full max-w-2xl">
            Strength training, also known as resistance or weight training,
            focuses on building muscular strength, endurance, and power. It
            involves exercises that challenge muscles through resistance, such
            as lifting weights, using resistance bands, or bodyweight exercises,
            promoting overall physical resilience and functionality.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col items-center gap-y-4 border-b py-12 border-black">
          <h1 className="text-2xl md:text-3xl font-bold text-center header">Benefits of Strength Training:</h1>
          <div className="text-justify w-full max-w-2xl">
            {benefits.map((item, index) => (
              <div key={index} className="mb-4">
                <h2 className="font-bold text-lg md:text-xl">{item.title}</h2>
                <ul className="list-disc list-inside">
                  {item.list.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Try Section */}
        <div className="flex flex-col items-center gap-y-4 py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-center header">Why Should You Try Strength Training?</h1>
          <p className="text-justify w-full max-w-2xl">
            Strength training is a key component of physical fitness, offering
            numerous benefits for both the body and mind. Whether your goal is
            to improve functional strength, enhance your physique, or simply
            stay active, strength training provides a foundation for a healthy
            and balanced lifestyle.
          </p>
        </div>
      </div>

      {/* View Exercises Button */}
      <div className="px-2 sm:px-4 lg:px-0">
        <Link href="/training/pages/strength">
          <div className="py-4 px-2 league font-semibold text-lg w-full sm:w-auto centralize bg-blue-600 mb-6 shadow-2xl hover:shadow-none pointer text-white text-center">
            VIEW EXERCISES
          </div>
        </Link>
      </div>
    </div>
  );
}