import RecomendationBlog from "@/components/recomendation";
import ShareButton from "@/components/share";
import Wrapper from "@/components/wrapper";
import { getBlogRecom, getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();

  return blogs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);
  const blogNe: IBlog[] = await getBlogRecom(params.slug);

  const options: Options = {
    renderMark: {
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
    },
    renderNode: {
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal mx-6">{children}</ol>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-4">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl my-4">{children}</h2>
      ),
    },
  };

  return (
    <Wrapper>
      <div className="flex mt-6 gap-2 w-full">
        <div className="flex-1 max-md:hidden">
          <div className="sticky top-[100px]">
            <div className="text-sm flex items-center gap-1">
              <IoArrowBack />
              <Link href={"/"} className="uppercase font-bold text-[12px]">
                kembali
              </Link>
            </div>
            <RecomendationBlog blogs={blogNe} />
            <ShareButton slug={blog.fields.slug} />
          </div>
        </div>
        <div className="flex-[1.7] box-content pr-36 max-lg:pr-0">
          <div className="text-sm font-bold text-green-700 uppercase">
            {blog.fields.category}
          </div>
          <div className="text-3xl max-md:text-2xl font-bold my-4">
            {blog.fields.title}
          </div>
          <div className="flex gap-2 text-sm">
            <span className="font-bold">{blog.fields.author.fields.name}</span>
            <span>∙</span>
            <span>{blog.fields.date}</span>
          </div>
          <div className="md:hidden">
            <ShareButton slug={blog.fields.slug} />
          </div>
          <div className="h-[400px] max-md:h-[300px] max-sm:h-[250px] w-full relative my-6">
            <Image
              src={`https:${blog.fields.thumbnail.fields.file.url}`}
              alt={blog.fields.slug}
              fill
              className="object-fill"
              priority
            />
          </div>
          {documentToReactComponents(blog.fields.content, options)}
          <div className="md:hidden">
            <hr />
            <RecomendationBlog blogs={blogNe} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
