import Image from "next/image";

export default function About() {
  return (
    <div className="relative">
      <div className="md:grid grid-cols-2">
        <div className="relative h-[550px]">
          <Image
            src={`/backgroundTwo.jpg`}
            width={500}
            height={500}
            alt="image"
            className="w-full h-full object-cover"
          />
          {/* Text container */}
          <div className="absolute inset-0 flex items-center justify-center w-full h-full px-4 md:px-0">
            <div className="text-left md:px-6 text-white flex flex-col gap-y-4">
              <h1 className="text-white text-7xl font-bold">
                About Eclipse Fitness Gym.
              </h1>
              <span className="cairo text-3xl font-semibold">
                Get to know us
              </span>
              <div className="flex gap-4">
                <div className="custom-button">Learn More</div>
                <div className="p-2 bg-blue-500 rounded-md shadow-lg hover:shadow-none cairo">
                  Watch Video
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-12 py-6 flex flex-col gap-y-12">
          <div className="flex justify-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold px-2 md:px-12 text-[#0065FF]">
              Join Eclipse and Transform Your Body and Mind
            </h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-[#0065FF]">Community</h1>
            <p className="cairo text-[#171717] text-sm py-4 text-justify">
              At Eclipse Fitness, we believe fitness is more than just a
              workout—it's a journey best shared with a supportive community.
              Our members come together to inspire, challenge, and celebrate
              each other’s progress every step of the way. Join us to experience
              the power of teamwork, encouragement, and shared success on your
              path to achieving your fitness goals. Together, we’re stronger.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-[#0065FF] flex justify-end">
              Motivation
            </h1>
            <p className="cairo text-[#171717] text-sm py-4 text-justify">
              At Eclipse Fitness, we know that staying motivated is key to
              reaching your fitness goals. That’s why we’re here to keep you
              inspired every step of the way. From energizing classes and expert
              trainers to progress tracking and success stories, we provide the
              tools and encouragement you need to push past limits and achieve
              your best self. Let us help you turn your drive into
              results—you’ve got this!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
