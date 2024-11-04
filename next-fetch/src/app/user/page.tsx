import UserPageClient from "@/components/userClient";
import UserPageServer from "@/components/userServer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "User Page",
  description: "Data user",
};

export default async function UserPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-evenly w-full">
        <UserPageServer />
        <UserPageClient />
      </div>
      {/* <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="relative w-[200px] h-[200px]"
      >
        <Image
          className="object-contain"
          src="/homepage/next.svg"
          alt="Next.js logo"
          priority
          fill
        />
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="relative w-[200px] h-[200px]"
      >
        <Image
          className="object-contain"
          src="/homepage/next.svg"
          alt="Next.js logo"
          priority
          fill
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="relative w-[200px] h-[200px]"
      >
        <Image
          className="object-contain"
          src="/homepage/next.svg"
          alt="Next.js logo"
          priority
          fill
        />
      </div>
      <div
        data-aos="flip-down"
        data-aos-duration="3000"
        className="relative w-[200px] h-[200px]"
      >
        <Image
          className="object-contain"
          src="/homepage/next.svg"
          alt="Next.js logo"
          priority
          fill
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="relative w-[200px] h-[200px]"
      >
        <Image
          className="object-contain"
          src="/homepage/next.svg"
          alt="Next.js logo"
          priority
          fill
        />
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="relative w-[200px] h-[200px]"
      >
        <Image
          className="object-contain"
          src="/homepage/next.svg"
          alt="Next.js logo"
          priority
          fill
        />
      </div> */}
    </div>
  );
}
