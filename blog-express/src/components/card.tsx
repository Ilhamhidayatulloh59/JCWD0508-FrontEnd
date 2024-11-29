import Image from "next/image";
import Link from "next/link";

interface ICardBlog {
  title: string;
  thumbnail: string;
  avatar: string;
  email: string;
  author: string;
  slug: string;
  category: string;
}

export default function Card({
  title,
  thumbnail,
  avatar,
  email,
  author,
  slug,
  category,
}: ICardBlog) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow w-full">
      <div className="rounded-t-lg h-[200px] w-full relative overflow-hidden">
        <Image
          className="object-fill rounded-t-lg hover:scale-110"
          src={thumbnail}
          alt={title}
          fill
          priority
        />
        <span className=" absolute bg-gray-600 text-white px-2 m-2 right-0 text-xs rounded-sm ">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h5 className="mb-2 text-md font-bold line-clamp-2 tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex items-center my-5">
          <div className="w-10 h-10 relative">
            <Image
              className="rounded-full object-cover"
              src={avatar}
              alt={author}
              fill
              priority
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {author}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {email}
            </p>
          </div>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
