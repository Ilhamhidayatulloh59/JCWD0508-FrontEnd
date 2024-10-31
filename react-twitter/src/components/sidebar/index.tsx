import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { MenuBar } from "./menu";
import { AvatarSideBar } from "./avatar";

export const SideBar = () => {
  return (
    <div className="flex flex-col justify-between h-screen py-10 items-end sm:ml-2">
      <div className="flex flex-col md:min-w-[200px] md:mr-8">
        <div className="rounded-full p-3 w-fit cursor-pointer hover:bg-gray-800">
          <FaXTwitter className="text-white text-[30px]" />
        </div>
        <MenuBar Icon={GoHomeFill} desc="Beranda" />
        <MenuBar Icon={IoSearchOutline} desc="Jelajahi" />
        <MenuBar Icon={IoNotificationsOutline} desc="Notifikasi" />
        <MenuBar Icon={CgMail} desc="Pesan" />
        <MenuBar Icon={CiBookmark} desc="Markah" />
      </div>
      <AvatarSideBar />
    </div>
  );
};
