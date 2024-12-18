import Link from "next/link";

export default function HowTo() {
  const how = [
    {
      title: "HIIT",
      description: `HIIT (High-Intensity Interval Training) is a form of
                        exercise that alternates between short bursts of intense
                        activity and periods of lower-intensity recovery or
                        rest. It's designed to maximize efficiency by providing
                        a highly effective workout in a shorter time compared to
                        traditional steady-state cardio.`,
      url: "/hiit",
    },
    {
      title: "STRENGTH",
      description: `Strength training, also known as resistance training, involves exercises designed to improve muscle strength and endurance by working against a resistance. This resistance can come from your own body weight, free weights (like dumbbells and kettlebells), resistance bands, or machines.`,
      url: "/strength",
    },
    {
      title: "ENDURANCE",
      description: `Endurance training, also known as aerobic or stamina training, focuses on improving the body's ability to sustain physical activity over extended periods. It involves exercises that increase your heart rate and breathing for an extended duration, enhancing the efficiency of your cardiovascular and respiratory systems.`,
      url: "/endurance",
    },
  ];
  return (
    <div className="relative h-screen bg-[#372F2F]">
      <div className="p-12 flex flex-col gap-12">
        <div className="flex justify-center flex-col items-center gap-y-2">
          <h1 className="text-white text-center text-4xl league font-bold">
            DON’T KNOW HOW TO START?
            <br />
            TRY OUT OUR TRAININGS.
          </h1>
          <p className="text-white text-sm league">
            Step by step challenges to keep you strong and motivated.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12">
          {how
            ? how?.map((item, index) => {
                return (
                  <div
                    className="bg-white rounded-lg shadow-md h-[400px] px-12"
                    key={index}>
                    <div className="py-12 flex items-center flex-col gap-4">
                      <h1 className="font-bold text-3xl">{item.title}</h1>
                      <p className="text-justify cairo font-semibold    ">
                        {item.description}
                      </p>
                      <div className="w-full">
                        <Link href={item.url}>
                          <button className="py-2 bg-blue-600 w-full my-2 shadow-lg hover:shadow-none">
                            VIEW EXERCISE
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
