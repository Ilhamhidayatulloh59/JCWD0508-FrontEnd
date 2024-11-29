export const getBlogs = async () => {
  const res = await fetch(`http://localhost:8000/api/blogs`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.blogs;
};

export const getBlogSlug = async (slug: string) => {
  const res = await fetch(`http://localhost:8000/api/blogs/${slug}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.blog;
};
