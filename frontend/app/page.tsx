import { api } from "@/lib/api";

async function fetchBlogs() {
  const response = await api.get("blogs/");
  return response.data;
}

export default async function Home() {
  const blogs = await fetchBlogs();

  return (
    <div>
      <h1>Welcome to SOVESA</h1>
      <h2>Latest Blogs</h2>
      <ul>
        {blogs.map((blog: any) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}
