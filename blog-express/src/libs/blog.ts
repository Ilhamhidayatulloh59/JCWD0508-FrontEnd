const base_url = process.env.NEXT_PUBLIC_BASE_URL_BE;

export const getBlogs = async () => {
  const res = await fetch(`${base_url}/blogs`, {
    next: { tags: ["blogs"] },
  });
  const data = await res.json();
  return data.blogs;
};

export const getBlogSlug = async (slug: string) => {
  const res = await fetch(`${base_url}/blogs/${slug}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.blog;
};
