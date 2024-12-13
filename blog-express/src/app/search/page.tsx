"use client";

import Card from "@/components/card";
import Wrapper from "@/components/wrapper";
import { IBlog } from "@/types/blog";
import { useCallback, useEffect, useState } from "react";
import Loading from "../loading";
import { useDebounce } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const base_url = process.env.NEXT_PUBLIC_BASE_URL_BE;

export default function SearchPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [value, setValue] = useState<string>(searchParams.get("keyword") || "");
  const [text] = useDebounce(value, 500);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const getData = async () => {
    try {
      setIsloading(true);
      const res = await fetch(`${base_url}/blogs?search=${text}`);
      const result = await res.json();
      setBlogs(result.blogs);
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading(false);
    }
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.push(pathname + "?" + createQueryString("keyword", text));
    getData();
  }, [text]);

  return (
    <Wrapper>
      <div className="w-full">
        <div className="flex w-full justify-end mb-5">
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search .."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[250px] p-2.5"
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : blogs.length == 0 ? (
          <div>not found</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
            {blogs.map((item, idx) => {
              return (
                <div key={idx} data-cy="blog-item">
                  <Card
                    category={item.category}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    author={item.user.username}
                    email={item.user.email}
                    avatar={item.user.avatar}
                    slug={item.slug}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
