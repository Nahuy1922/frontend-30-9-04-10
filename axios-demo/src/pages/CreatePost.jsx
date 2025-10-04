import axiosClient from "../api/axiosClient";

function CreatePost() {
  const handleCreate = async () => {
    try {
      const res = await axiosClient.post("/posts", {
        title: "Bài viết mới",
        body: "Nội dung demo",
        userId: 1,
      });
      console.log("✅ Created:", res);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleCreate} className="bg-green-500 text-white px-4 py-2">Tạo bài viết</button>;
}

export default CreatePost;
