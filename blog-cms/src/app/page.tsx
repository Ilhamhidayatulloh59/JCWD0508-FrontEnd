import Card from "@/components/card";
import Wrapper from "@/components/wrapper";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";

export default async function Home() {
  const data: IBlog[] = await getBlogs();
  return (
    <div>
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {data.map((item, idx) => {
            return (
              <div key={idx} data-cy="blog-item">
                <Card
                  category={item.fields.category}
                  title={item.fields.title}
                  thumbnail={item.fields.thumbnail.fields.file.url}
                  author={item.fields.author.fields.name}
                  email={item.fields.author.fields.email}
                  avatar={item.fields.author.fields.avatar.fields.file.url}
                  slug={item.fields.slug}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
