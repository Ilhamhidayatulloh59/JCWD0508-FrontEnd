import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-60px)] items-center justify-center">
      <div className="flex gap-2">
        <div className="relative h-10 w-10 animate-loading">
          <Image
            src="https://www.blogger.com/img/logo_blogger_40px_2x.png"
            alt="Logo Blogger"
            fill
            priority
          />
        </div>
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          Blogger
        </span>
      </div>
    </div>
  );
}
