import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" py-4 px-4 primary fixed top-0 w-full z-20">
      <div className="flex justify-between">
        <div className="bg-transparent w-[50px] h-[50px]">
          <Link href={`/`}>
            <Image
              src={`/logo.webp`}
              width={50}
              height={50}
              alt="logo"
              aria-label="logo"
              className="h-[50px] w-[50px] pointer"
            />
          </Link>
        </div>
        <div className="flex items-center gap-12 px-4">
          <Link href={`/`}>
            <div className="pointer">Home</div>
          </Link>
          <Link href={`/about`}>
            <div className="pointer">About</div>
          </Link>
          <Link href={`/training`}>
            <div className="pointer">Training</div>
          </Link>
          <div className="py-2 rounded-md shadow-lg hover:shadow-none px-3 bg-gradient-to-r from-[#F45666] to-[#9352F4] cairo">
            LOG IN
          </div>
        </div>
      </div>
    </div>
  );
}
