import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosClient.get("/posts?_limit=5")
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Danh sách bài viết</h2>
      <ul className="list-disc pl-5">
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
