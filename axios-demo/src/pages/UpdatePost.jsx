import axiosClient from "../api/axiosClient";

function UpdatePost() {
  const handleUpdate = async () => {
    try {
      const res = await axiosClient.put("/posts/1", {
        id: 1,
        title: "Tiêu đề mới",
        body: "Nội dung đã cập nhật",
        userId: 1,
      });
      console.log("✏️ Updated:", res);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2">Cập nhật bài viết</button>;
}

export default UpdatePost;
