"use client";

import useSession from "@/hooks/useSession";
import { deleteCookie } from "@/libs/action";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Avatar = () => {
  const router = useRouter();
  const { user, isAuth, setIsAuth } = useSession();
  const onLogout = () => {
    deleteCookie("token");
    setIsAuth(false);
    router.push("/login");
  };

  return (
    <>
      {isAuth ? (
        <div onClick={onLogout} className="flex items-center cursor-pointer">
          <div className="w-10 h-10 relative">
            <Image
              className="rounded-full object-cover"
              src={user?.avatar || ""}
              alt={user?.username || "author"}
              fill
              priority
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {user?.username}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {user?.email}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={() => router.push("/register")}
            className="inline-flex items-center border px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-100 "
          >
            Register
          </button>
          <button
            onClick={() => router.push("/login")}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 "
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};
