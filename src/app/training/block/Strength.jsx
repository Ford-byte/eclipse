import Link from "next/link";

export default function Strength() {
  const benefits = [
    {
      title: "Builds Muscle Mass",
      list: [
        "Promotes muscle growth through resistance training",
        "Enhances muscle strength and endurance",
      ],
    },
    {
      title: "Improves Bone Density",
      list: [
        "Reduces the risk of osteoporosis",
        "Strengthens bones by applying stress through weightlifting",
      ],
    },
    {
      title: "Boosts Metabolic Rate",
      list: [
        "Increases resting metabolism as muscle burns more calories than fat",
        "Supports long-term weight management",
      ],
    },
    {
      title: "Enhances Functional Strength",
      list: [
        "Improves the ability to perform daily activities with ease",
        "Reduces the risk of injury by strengthening stabilizing muscles",
      ],
    },
    {
      title: "Improves Mental Health",
      list: [
        "Boosts confidence and self-esteem",
        "Releases endorphins that help reduce stress and improve mood",
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="py-12 flex flex-col gap-y-12 leading-6">
        <div className="centralize flex flex-col items-center gap-y-4 border-b py-12 border-black">
          <h1 className="header">About</h1>
          <p className="text-justify w-2/4">
            Strength training, also known as resistance or weight training,
            focuses on building muscular strength, endurance, and power. It
            involves exercises that challenge muscles through resistance, such
            as lifting weights, using resistance bands, or bodyweight exercises,
            promoting overall physical resilience and functionality.
          </p>
        </div>
        <div className="centralize flex flex-col items-center gap-y-4 border-b py-12 border-black">
          <h1 className="header">Benefits of Strength Training:</h1>
          <div className="text-justify w-2/4">
            {benefits.map((item, index) => (
              <div key={index} className="mb-4">
                <h2 className="font-bold">{item.title}</h2>
                <ul className="list-disc list-inside">
                  {item.list.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="centralize flex flex-col items-center gap-y-4 py-12">
          <h1 className="header">Why Should You Try Strength Training?</h1>
          <p className="text-justify w-2/4">
            Strength training is a key component of physical fitness, offering
            numerous benefits for both the body and mind. Whether your goal is
            to improve functional strength, enhance your physique, or simply
            stay active, strength training provides a foundation for a healthy
            and balanced lifestyle.
          </p>
        </div>
      </div>
      <div className="px-2">
        <Link href={`/training/pages/strength`}>
          <div className="py-4 px-2 league font-semibold text-lg w-full centralize bg-blue-600 mb-6 shadow-2xl hover:shadow-none pointer text-white">
            VIEW EXERCISES
          </div>
        </Link>
      </div>
    </div>
  );
}
