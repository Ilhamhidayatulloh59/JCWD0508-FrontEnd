"use client";

import Link from "next/link";
import Wrapper from "./wrapper";
import ButtonSignIn from "./buttonSign-in";
import { useEffect, useState } from "react";
import supabase from "@/services/supabase";
import { User } from "@supabase/supabase-js";
import Avatar from "./avatar";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <div className="h-[60px] sticky top-0 z-10 bg-white">
      <Wrapper>
        <div className="flex justify-between w-full">
          <Link href={"/"} className="flex items-center gap-2">
            <img
              src="https://www.blogger.com/img/logo_blogger_40px_2x.png"
              alt="Logo Blogger"
              className="h-8"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Blogger
            </span>
          </Link>
          {user ? (
            <Avatar
              picture={user.user_metadata.picture}
              full_name={user.user_metadata.name}
              email={user.user_metadata.email}
            />
          ) : (
            <ButtonSignIn />
          )}
        </div>
      </Wrapper>
    </div>
  );
}
