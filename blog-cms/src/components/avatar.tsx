import supabase from "@/services/supabase";
import Image from "next/image";

interface IProps {
  picture: string;
  full_name: string;
  email: string;
}

export default function Avatar({ picture, full_name, email }: IProps) {
  const onLogout = () => {
    supabase.auth.signOut();
  };
  return (
    <div onClick={onLogout} className="flex items-center cursor-pointer">
      <div className="w-8 h-8 relative">
        <Image
          className="rounded-full object-cover"
          src={picture}
          alt={full_name}
          fill
          priority
        />
      </div>
      <div className="flex-1 min-w-0 ms-2">
        <p className="text-[12px] font-medium text-gray-900 truncate dark:text-white">
          {full_name}
        </p>
        <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
          {email}
        </p>
      </div>
    </div>
  );
}
