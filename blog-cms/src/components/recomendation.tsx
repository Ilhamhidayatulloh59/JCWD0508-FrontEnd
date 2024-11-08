import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function RecomendationBlog({ blogs }: { blogs: IBlog[] }) {
  return (
    <div className="my-4">
      <p className="text-[12px] max-md:text-lg my-2 uppercase font-bold">rekomendasi</p>
      {blogs.map((item, idx) => {
        return (
          <Link
            href={item.fields.slug}
            className="flex cursor-pointer mr-5 p-2 hover:bg-slate-100"
            key={idx}
          >
            <div className="h-[80px] w-[100px] relative overflow-hidden">
              <Image
                className="object-contain hover:scale-110"
                src={`https:${item.fields.thumbnail.fields.file.url}`}
                alt={item.fields.title}
                fill
                priority
              />
            </div>
            <div className="w-full p-2 flex flex-col gap-2">
              <p className="text-sm font-bold line-clamp-2 text-gray-900">
                {item.fields.title}
              </p>
              <div className="flex gap-1 text-[10px]">
                <span className="font-bold">
                  {item.fields.author.fields.name}
                </span>
                <span>∙</span>
                <span>{item.fields.date}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
