"use client";

import { signInWithGoogle } from "@/libs/auth";
import { FcGoogle } from "react-icons/fc";

export default function ButtonSignIn() {
  return (
    <button
      onClick={signInWithGoogle}
      className="bg-white hover:bg-gray-300 text-black font-bold px-1 rounded-full flex justify-center items-center gap-1 border border-gray-300"
    >
      <FcGoogle className="text-[24px]" /> Sign-in
    </button>
  );
}
