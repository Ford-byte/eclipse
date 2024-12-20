import Link from "next/link";

export default function Endurance() {
  const benefits = [
    {
      title: "Improves Cardiovascular Health",
      list: [
        "Strengthens the heart, improving its ability to pump blood",
        "Reduces the risk of heart disease",
      ],
    },
    {
      title: "Enhances Lung Capacity",
      list: [
        "Improves oxygen intake and delivery to muscles",
        "Boosts overall stamina",
      ],
    },
    {
      title: "Increases Energy Levels",
      list: [
        "Boosts mitochondrial function for energy production at the cellular level",
        "Helps reduce fatigue and sustain energy levels",
      ],
    },
    {
      title: "Burns Calories and Aids in Weight Management",
      list: [
        "Increases calorie expenditure",
        "Supports maintaining or losing weight effectively",
      ],
    },
    {
      title: "Improves Mental Health",
      list: [
        "Releases endorphins that reduce stress, anxiety, and depression",
        "Boosts mood and cognitive function",
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="py-12 flex flex-col gap-y-12 leading-6">
        <div className="centralize flex flex-col items-center gap-y-4 border-b py-12 border-black">
          <h1 className="header text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
            About
          </h1>
          <p className="text-justify max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] text-base sm:text-lg">
            Endurance training, also known as aerobic or stamina training,
            focuses on improving the body's ability to sustain physical activity
            over extended periods. It involves exercises that increase your
            heart rate and breathing for an extended duration, enhancing the
            efficiency of your cardiovascular and respiratory systems.
          </p>
        </div>
        <div className="centralize flex flex-col items-center gap-y-4 border-b py-12 border-black">
          <h1 className="header text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
            Benefits of Endurance:
          </h1>
          <div className="text-justify max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] text-base sm:text-lg">
            {benefits.map((item, index) => (
              <div key={index} className="mb-6">
                <h2 className="font-bold text-lg sm:text-xl lg:text-2xl">
                  {item.title}
                </h2>
                <ul className="list-disc list-inside pl-4">
                  {item.list.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="centralize flex flex-col items-center gap-y-4 py-12">
          <h1 className="header text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
            Why Should You Try HIIT?
          </h1>
          <p className="text-justify max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] text-base sm:text-lg">
            Endurance training is an essential component of overall fitness,
            promoting a healthier heart, better stamina, and a more active
            lifestyle. Whether your goal is to run a marathon, improve your
            health, or simply enjoy an active lifestyle, endurance training
            offers numerous benefits for the body and mind.
          </p>
        </div>
      </div>

      <div className="px-2 sm:px-4 lg:px-0">
        <Link href="/training/pages/endurance">
          <div className="py-4 px-2 league font-semibold text-lg w-full sm:w-auto centralize bg-blue-600 mb-6 shadow-2xl hover:shadow-none pointer text-white text-center">
            VIEW EXERCISES
          </div>
        </Link>
      </div>
    </div>
  );
}
