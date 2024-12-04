"use client";

import { useSession } from "@/context/useSession";
import { deleteCookie } from "@/libs/action";
import { useRouter } from "next/navigation";
import AvatarMenu from "./avatarMenu";

export const Avatar = () => {
  const router = useRouter();
  const { user, isAuth, setIsAuth } = useSession();
  const onLogout = () => {
    deleteCookie("token");
    setIsAuth(false);
    router.push("/login");
    router.refresh();
  };

  return (
    <>
      {isAuth ? (
        <AvatarMenu user={user} onLogout={onLogout} />
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
