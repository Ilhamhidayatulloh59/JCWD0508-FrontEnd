import { FaEllipsisH } from "react-icons/fa";
import { Avatar } from "../avatar";
import { useState } from "react";

export const AvatarSideBar = () => {
  const src = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
  const [user] = useState({
    username: "Andi",
    email: "andi@gmail.com"
  })
  return (
    <div 
      className={`flex text-white gap-3 items-center rounded-full cursor-pointer bg-transparent hover:bg-gray-800 p-2 md:mr-8 mb-4`}
    >
      <Avatar src={src} alt={user.username} />
      <div className="hidden md:block">
        <p>{user.username}</p>
        <p className="text-[14px]">{user.email}</p>
      </div>
      <FaEllipsisH className="text-white text-[16px] hidden md:block" />
    </div>
  );
};
