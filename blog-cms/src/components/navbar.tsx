import Link from "next/link";
import Wrapper from "./wrapper";

export default function Navbar() {
  return (
    <div className="h-[80px] sticky top-0 z-0">
      <Wrapper>
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
      </Wrapper>
    </div>
  );
}
