import Image from "next/image";

export default function Footer() {
  const contactDetails = [
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
    <footer>
      <div className="bg-[#372F2F] flex justify-center items-center">
        <div className="relative bg-[#1056A5] w-11/12 md:w-3/4 translate-y-[50%] py-4 shadow-lg z-10 text-white">
          <h1 className="font-bold text-3xl text-white text-center league tracking-widest">
            GET IN TOUCH
          </h1>
          <p className="text-center text-white text-xs league tracking-wide">Contact Us</p>
          <div className="px-4">
            <form className="grid grid-cols-2 gap-6 py-2 text-xs md:text-base">
              <div className="flex flex-col">
                <label htmlFor="firstname" className="league">
                  Firstname:
                </label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter your firstname"
                  className="py-2 border-b border-white bg-[#142B45] px-2 league"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastname" className="league">
                  Lastname:
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter your lastname"
                  className="py-2 border-b border-white bg-[#142B45] px-2 league"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="league">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="py-2 border-b border-white bg-[#142B45] px-2 league"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="league">
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="py-2 border-b border-white bg-[#142B45] px-2 league"
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label htmlFor="message" className="league">
                  Message:
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="py-2 px-2 h-[100px] border-b border-white bg-[#142B45] league overflow-auto resize-none"></textarea>
              </div>

              <div className="flex flex-col col-span-2">
                <button className="bg-[#372F2F] shadow-md py-4 hover:shadow-none font-bold tracking-widest">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative h-fit bg-gradient-to-r from-[#1056A5] to-[#142B45] pb-8 pt-52">
        <div className="flex flex-col gap-y-12 md:gap-y-16 pt-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-y-4 text-center px-4">
                  {item.icon && (
                    <div className="bg-black p-4 rounded-full">
                      <Image
                        src={item.icon}
                        width={50}
                        height={50}
                        alt={`${item.title} icon`}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <span className="league text-white text-lg font-semibold">
                    {item.title}
                  </span>
                  {item.details && (
                    <div
                      className="text-blue-500 underline text-sm"
                      aria-label={item.title}>
                      {item.title === "FACEBOOK" ? (
                        <a
                          href={`https://facebook.com/${item.details}`}
                          target="_blank"
                          rel="noopener noreferrer">
                          {item.details}
                        </a>
                      ) : (
                        item.details
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center relative">
            <Image
              src="/Logo.webp"
              width={100}
              height={100}
              alt="Eclipse Fitness Logo"
              className=" w-24 h-24 object-contain z-20"
            />
            <div className="absolute top-1/2 -translate-y-1/2 border-t border-white w-full"></div>
          </div>

          <div className="text-white text-center px-4 md:px-0 text-sm md:text-base">
            <p>2024 - Eclipse Fitness. All Rights Reserved</p>
            <p>
              Website Design & Development: Eclipse IT Department | Management
              Team: Eclipse Fitness Operations Team
            </p>
          </div>

          <div className="grid grid-cols-2 text-white text-center text-sm">
            <div>@eclipse</div>
            <div>@eclipse</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
