import { FaEllipsisH } from "react-icons/fa";
import { Avatar } from "../avatar";
import { useEffect, useState } from "react";
import { UserState } from "../../types/user";
import axios from "../../helpers/axios";
import { useNavigate } from "react-router-dom";

export const AvatarSideBar = () => {
  const src =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
  const [user, setUser] = useState<UserState | null>(null);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="flex text-white gap-3 items-center rounded-full cursor-pointer bg-transparent hover:bg-gray-800 p-2 md:mr-8 mb-4"
      onClick={onLogout}
    >
      <Avatar src={src} alt={user?.username || ""} />
      <div className="hidden md:block">
        <p>{user?.username}</p>
        <p className="text-[14px]">{user?.email}</p>
      </div>
      <FaEllipsisH className="text-white text-[16px] hidden md:block" />
    </div>
  );
};
