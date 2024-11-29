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
    </div>
  );
}
