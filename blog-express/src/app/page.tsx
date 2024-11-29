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
      </Wrapper>
    </div>
  );
}
