import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center h-[60px] bg-teal-500 gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/user"}>User</Link>
    </div>
  );
}
