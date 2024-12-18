import Image from "next/image";

export default function Footer() {
  const data = [
    {
      icon: "/location.png",
      title: "GYM ADDRESS",
      details: "Datag, Buagsong Cordova",
    },
    {
      icon: "/phone.png",
      title: "PHONE NUMBER",
      details: "09324150079",
    },
    {
      icon: "/mail.png",
      title: "EMAIL ACCOUNT",
      details: "eclipsefitnessofficial@gmail.com",
    },
    {
      icon: "/facebook.webp",
      title: "FACEBOOK",
      details: "@eclipsefitness",
    },
  ];

  return (
    <div className="relative h-fit bg-gradient-to-r from-[#1056A5] to-[#142B45] pt-12 pb-4">
      <div className="flex flex-col gap-y-6 md:gap-y-24">
        <div className="flex justify-center">
          <h1 className="font-bold text-3xl text-white league">GET IN TOUCH</h1>
        </div>
        <div className="centralize">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data
              ? data?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center gap-y-4">
                      {item.icon && (
                        <div className="bg-black px-4 py-4 rounded-full">
                          <Image
                            src={item.icon}
                            width={100}
                            height={100}
                            alt="logo"
                            className="w-[50px] h-[50px] object-cover"
                          />
                        </div>
                      )}
                      <span className="league text-white">{item.title}</span>
                      {item.details && (
                        <div className="text-blue-500 underline">
                          {item.details}
                        </div>
                      )}
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={`/Logo.webp`}
            width={100}
            height={100}
            alt="logo"
            className="w-[100px] h-[100px] object-cover z-10"
          />
          <div className="border absolute border-white w-full mt-2"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-white px-6 md:px-0 text-justify">
          <div>2024 - Eclipse Fitness . All Rights Reserved </div>
          <div>
            Website Design & Development: Eclipse IT Department Management Team:
            Eclipse Fitness Operations Team
          </div>
        </div>
        <div className="grid grid-cols-2 text-white">
          <div className="flex justify-center">@eclipse</div>
          <div className="flex justify-center">@eclipse</div>
        </div>
      </div>
    </div>
  );
}
