import Link from "next/link";
import Wrapper from "./wrapper";
import { Avatar } from "./avatar";

export default function Navbar() {
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
          <Avatar />
        </div>
      </Wrapper>
    </div>
  );
}
