import Image from "next/image";
import Link from "next/link";
import coachJson from "@/app/static/coach.json";

export default function Coach() {
  return (
    <div className="relative py-12 league">
      <div className="centralize font-semibold tracking-wide text-3xl md:text-5xl">
        MEET THE TEAM
      </div>
      <div className="py-4 centralize">
        <div className="container grid grid-cols-1 md:grid-cols-3 py-4 gap-12">
          {coachJson?.map((item, index) => {
            const name = item.fullname.toLowerCase();
            return (
              <div key={index} className="centralize px-4">
                <div className="bg-[#372F2F] text-white h-full shadow-lg rounded-md">
                  <Image
                    src={item.image}
                    height={400}
                    width={500}
                    alt="profile"
                    className="w-full rounded-t-md"
                  />
                  <div className="py-4 px-2 flex justify-between items-center tracking-widest">
                    <div>{item.fullname}</div>
                    <Link href={`/coach/${item.fullname }`}>
                      <div className="text-xs hover:underline pointer">
                        more details
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
