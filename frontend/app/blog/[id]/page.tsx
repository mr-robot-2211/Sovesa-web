"use client";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  date_published: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/blogs/");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Latest Blogs</h1>
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="mb-6 border-b pb-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-700">{blog.content.slice(0, 200)}...</p>
              <p className="text-gray-500 mt-2">
                By <span className="font-medium">{blog.author}</span> on{" "}
                {new Date(blog.date_published).toDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
